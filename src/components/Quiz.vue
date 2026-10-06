<script setup lang="ts">
import { ref, reactive, computed, onMounted, onUnmounted } from "vue";
import { QUIZ_QUESTIONS } from "../quizData";
import { TOPICS } from "../data";
import { renderMarkdown } from "../utils/markdownRenderer";

// Time limit per question in seconds (easily configurable)
const SECONDS_PER_QUESTION = 60;

const STATE = { SETUP: "setup", RUNNING: "running", RESULTS: "results" };
const state = ref(STATE.SETUP);

const questionCountOptions = [20, 30, 50];
const selectedCount = ref(20);

const quizQuestions = ref([]);
const currentIndex = ref(0);
const userAnswers = reactive({}); // id -> selected option index

// Timer state
const timeRemaining = ref(0);
let timerInterval: number | null = null;

// Cleanup timer
function stopTimer() {
  if (timerInterval !== null) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

// Reset quiz state on component mount (ensures fresh start when navigating to /quiz)
onMounted(() => {
  state.value = STATE.SETUP;
  quizQuestions.value = [];
  currentIndex.value = 0;
  for (const k in userAnswers) delete userAnswers[k];
  stopTimer();
});

// Cleanup on unmount
onUnmounted(() => {
  stopTimer();
});

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function selectBalancedQuestions(count: number) {
  // Get unique topics
  const topics = [...new Set(QUIZ_QUESTIONS.map((q) => q.topic))];
  const questionsPerTopic = Math.floor(count / topics.length);
  const remainder = count % topics.length;

  const selectedIds = new Set<string>(); // Track selected question IDs to prevent duplicates
  const selected: typeof QUIZ_QUESTIONS = [];

  // Step 1: Select questions from each topic
  topics.forEach((topic, index) => {
    const topicQuestions = QUIZ_QUESTIONS.filter(
      (q) => q.topic === topic && !selectedIds.has(q.id),
    );

    // Calculate how many questions to take from this topic
    const takeCount = questionsPerTopic + (index < remainder ? 1 : 0);

    // Shuffle and take the required count
    const shuffled = shuffle(topicQuestions);
    const toTake = shuffled.slice(
      0,
      Math.min(takeCount, topicQuestions.length),
    );

    // Add to selected array and mark IDs
    toTake.forEach((q) => {
      selectedIds.add(q.id);
      selected.push(q);
    });
  });

  // Step 2: If we still need more questions (shouldn't happen normally, but just in case)
  if (selected.length < count) {
    const remaining = QUIZ_QUESTIONS.filter((q) => !selectedIds.has(q.id));
    const shuffled = shuffle(remaining);
    const needed = count - selected.length;

    shuffled.slice(0, needed).forEach((q) => {
      selectedIds.add(q.id);
      selected.push(q);
    });
  }

  // Step 3: Final shuffle to randomize question order
  return shuffle(selected);
}

function startQuiz() {
  const n = Math.min(selectedCount.value, QUIZ_QUESTIONS.length);
  quizQuestions.value = selectBalancedQuestions(n);
  currentIndex.value = 0;
  for (const k in userAnswers) delete userAnswers[k];

  // Start timer: total time = SECONDS_PER_QUESTION * number of questions
  timeRemaining.value = SECONDS_PER_QUESTION * quizQuestions.value.length;
  stopTimer(); // Clear any existing timer
  timerInterval = setInterval(() => {
    timeRemaining.value--;
    if (timeRemaining.value <= 0) {
      finishQuiz();
    }
  }, 1000);

  state.value = STATE.RUNNING;
}

function finishQuiz() {
  stopTimer();
  state.value = STATE.RESULTS;
}

const currentQuestion = computed(() => quizQuestions.value[currentIndex.value]);
const isLast = computed(
  () => currentIndex.value === quizQuestions.value.length - 1,
);
const answeredCurrent = computed(
  () => userAnswers[currentQuestion.value?.id] !== undefined,
);

function selectOption(optIdx) {
  userAnswers[currentQuestion.value.id] = optIdx;
}

function goNext() {
  if (isLast.value) {
    finishQuiz();
  } else {
    currentIndex.value++;
  }
}
function goPrev() {
  if (currentIndex.value > 0) currentIndex.value--;
}

// Timer display helpers
const timerMinutes = computed(() => Math.floor(timeRemaining.value / 60));
const timerSeconds = computed(() => timeRemaining.value % 60);
const timerDisplay = computed(() => {
  const mins = timerMinutes.value.toString().padStart(2, "0");
  const secs = timerSeconds.value.toString().padStart(2, "0");
  return `${mins}:${secs}`;
});
const timerWarning = computed(() => timeRemaining.value <= 30);
const timerCritical = computed(() => timeRemaining.value <= 10);

const score = computed(() => {
  let correct = 0;
  for (const q of quizQuestions.value) {
    if (userAnswers[q.id] === q.correct) correct++;
  }
  return correct;
});
const scorePercent = computed(() => {
  if (quizQuestions.value.length === 0) return 0;
  return Math.round((score.value / quizQuestions.value.length) * 100);
});

function topicTitle(id) {
  const t = TOPICS.find((t) => t.id === id);
  return t ? t.title : id;
}

function renderExplanation(explanation: string): string {
  return renderMarkdown(explanation);
}

function restart() {
  stopTimer();
  state.value = STATE.SETUP;
}

// Count unanswered questions
const unansweredCount = computed(() => {
  let count = 0;
  for (const q of quizQuestions.value) {
    if (userAnswers[q.id] === undefined) count++;
  }
  return count;
});
</script>

<template>
  <div>
    <!-- SETUP -->
    <div
      v-if="state === 'setup'"
      class="bg-gray-900 border border-gray-800 rounded-[10px] p-8 text-center max-w-[560px] mx-auto my-10 shadow-lg"
    >
      <h2 class="mt-0">Teszt indítása</h2>
      <p class="text-gray-400 text-base">
        Válaszd ki, hány kérdésből álljon a teszt. A kérdések minden témakörből
        egyenletesen kerülnek kiválasztásra, véletlenszerű sorrendben. A teszt
        végén megkapod az eredményedet és minden kérdéshez a részletes
        magyarázatot.
      </p>
      <div
        class="bg-amber-900/20 border border-amber-700/50 rounded-lg p-4 my-5"
      >
        <p class="text-amber-400 font-semibold mb-1 text-base">
          ⏱️ Időkorlát: {{ SECONDS_PER_QUESTION }} másodperc kérdésenként
        </p>
        <p class="text-gray-400 text-sm m-0">
          Teljes idő:
          {{ Math.floor((SECONDS_PER_QUESTION * selectedCount) / 60) }} perc
          {{ (SECONDS_PER_QUESTION * selectedCount) % 60 }} másodperc ({{
            selectedCount
          }}
          kérdés)
        </p>
        <p class="text-gray-400 text-sm m-0 mt-1">
          Ha az idő lejár, a teszt automatikusan befejeződik. A meg nem
          válaszolt kérdések hibásnak számítanak.
        </p>
      </div>
      <div class="flex justify-center gap-2.5 my-5 flex-wrap">
        <button
          v-for="n in questionCountOptions"
          :key="n"
          :class="[
            'border px-4 py-3 rounded-lg font-bold cursor-pointer text-base',
            selectedCount === n
              ? 'bg-amber-500 border-amber-500 text-white'
              : 'border-gray-800 bg-gray-900 text-gray-100',
          ]"
          @click="selectedCount = n"
        >
          {{ n }} kérdés
        </button>
      </div>
      <button
        class="bg-amber-500 text-white border-0 px-7 py-3 rounded-lg font-bold text-base cursor-pointer hover:bg-amber-600"
        @click="startQuiz"
      >
        Teszt indítása
      </button>
    </div>

    <!-- RUNNING -->
    <div v-else-if="state === 'running'">
      <div class="h-2 bg-gray-800 rounded overflow-hidden mb-1.5">
        <div
          class="h-full bg-amber-500 transition-all duration-250"
          :style="{
            width: ((currentIndex + 1) / quizQuestions.length) * 100 + '%',
          }"
        ></div>
      </div>
      <div class="flex justify-between items-center mb-4">
        <p class="text-base text-gray-400 m-0">
          Kérdés {{ currentIndex + 1 }} / {{ quizQuestions.length }}
        </p>
        <div
          :class="[
            'text-2xl font-bold font-mono px-4 py-2 rounded-lg border-2 transition-all',
            timerCritical
              ? 'text-red-400 border-red-500 bg-red-950/50 animate-pulse'
              : timerWarning
                ? 'text-amber-400 border-amber-500 bg-amber-950/50'
                : 'text-emerald-400 border-emerald-600 bg-emerald-950/50',
          ]"
        >
          ⏱️ {{ timerDisplay }}
        </div>
      </div>

      <div
        class="bg-gray-900 border border-gray-800 rounded-[10px] p-6 shadow-lg"
      >
        <div
          class="inline-block text-base font-bold uppercase tracking-wide text-blue-400 bg-slate-800 px-2 py-0.5 rounded-xl mb-2.5"
        >
          {{ topicTitle(currentQuestion.topic) }}
        </div>
        <h3 class="my-1.5 mb-4 text-xl">{{ currentQuestion.question }}</h3>
        <div class="flex flex-col gap-2.5">
          <button
            v-for="(opt, i) in currentQuestion.options"
            :key="i"
            :class="[
              'text-left border-2 px-4 py-3 rounded-lg text-base cursor-pointer transition-all',
              userAnswers[currentQuestion.id] === i
                ? 'border-amber-500 bg-amber-950/40 font-semibold'
                : 'border-gray-800 bg-gray-900 hover:border-amber-500',
            ]"
            @click="selectOption(i)"
          >
            {{ opt }}
          </button>
        </div>
      </div>

      <div class="flex justify-between mt-5">
        <button
          class="border border-gray-800 bg-gray-900 px-3.5 py-3 rounded-lg cursor-pointer text-base font-semibold text-gray-100 transition-all hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed"
          :disabled="currentIndex === 0"
          @click="goPrev"
        >
          &larr; Előző
        </button>
        <button
          class="bg-amber-500 border-amber-500 text-white px-3.5 py-3 rounded-lg cursor-pointer text-base font-semibold transition-all hover:bg-amber-600"
          @click="goNext"
        >
          {{ isLast ? "Teszt befejezése" : "Következő &rarr;" }}
        </button>
      </div>
    </div>

    <!-- RESULTS -->
    <div v-else-if="state === 'results'">
      <div
        class="bg-gray-900 border border-gray-800 rounded-[10px] p-7 text-center shadow-lg mb-6"
      >
        <h2 class="mt-0">
          Eredmény: {{ score }} / {{ quizQuestions.length }} ({{
            scorePercent
          }}%)
        </h2>
        <p
          v-if="scorePercent >= 80"
          class="text-[19px] font-semibold text-emerald-500"
        >
          Kiváló eredmény! 🎉
        </p>
        <p
          v-else-if="scorePercent >= 60"
          class="text-[19px] font-semibold text-amber-600"
        >
          Jó alap, de érdemes még gyakorolni. 💪
        </p>
        <p v-else class="text-[19px] font-semibold text-red-500">
          Nézd át még egyszer a tananyagot, és próbáld újra! 📘
        </p>
        <p v-if="unansweredCount > 0" class="text-base text-gray-400 mt-3">
          Meg nem válaszolt kérdések: {{ unansweredCount }}
        </p>
        <button
          class="bg-amber-500 text-white border-0 px-7 py-3 rounded-lg font-bold text-base cursor-pointer hover:bg-amber-600 mt-4"
          @click="restart"
        >
          Új teszt indítása
        </button>
      </div>

      <div class="flex flex-col gap-3.5">
        <div
          v-for="(q, i) in quizQuestions"
          :key="q.id"
          :class="[
            'bg-gray-900 border rounded-[10px] p-4 px-5 shadow-lg',
            userAnswers[q.id] === q.correct
              ? 'border-l-4 border-emerald-500'
              : userAnswers[q.id] === undefined
                ? 'border-l-4 border-gray-600'
                : 'border-l-4 border-red-500',
          ]"
        >
          <div class="flex items-center gap-2 mb-2.5 flex-wrap">
            <div
              class="inline-block text-base font-bold uppercase tracking-wide text-blue-400 bg-slate-800 px-2 py-0.5 rounded-xl"
            >
              {{ topicTitle(q.topic) }}
            </div>
            <div
              v-if="userAnswers[q.id] === undefined"
              class="inline-block text-sm font-bold uppercase tracking-wide text-gray-400 bg-gray-700 px-2 py-0.5 rounded-xl"
            >
              Nem válaszolt
            </div>
          </div>
          <p class="text-[19px] my-1 mb-3">
            <b>{{ i + 1 }}.</b> {{ q.question }}
          </p>
          <ul class="list-none p-0 m-0 mb-3 flex flex-col gap-1.5">
            <li
              v-for="(opt, oi) in q.options"
              :key="oi"
              :class="[
                'text-base px-2.5 py-1.5 rounded-md flex items-center gap-2',
                oi === q.correct ? 'bg-emerald-950/50 font-semibold' : '',
                oi === userAnswers[q.id] && oi !== q.correct
                  ? 'bg-red-950/50 font-semibold'
                  : '',
                oi !== q.correct && oi !== userAnswers[q.id]
                  ? 'bg-gray-800'
                  : '',
              ]"
            >
              <span v-if="oi === q.correct">✅</span>
              <span v-else-if="oi === userAnswers[q.id]">❌</span>
              <span v-else class="opacity-30 text-base">&#9679;</span>
              {{ opt }}
            </li>
          </ul>
          <div
            class="text-base text-gray-400 m-0 mb-2 markdown-content"
            v-html="renderExplanation(q.explanation)"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
