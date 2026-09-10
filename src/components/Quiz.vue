<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { QUIZ_QUESTIONS } from '../quizData'
import { TOPICS } from '../data'
import { renderMarkdown } from '../utils/markdownRenderer'

const STATE = { SETUP: 'setup', RUNNING: 'running', RESULTS: 'results' }
const state = ref(STATE.SETUP)

const questionCountOptions = [20, 30, 50]
const selectedCount = ref(20)

const quizQuestions = ref([])
const currentIndex = ref(0)
const userAnswers = reactive({}) // id -> selected option index

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function startQuiz() {
  const n = Math.min(selectedCount.value, QUIZ_QUESTIONS.length)
  quizQuestions.value = shuffle(QUIZ_QUESTIONS).slice(0, n)
  currentIndex.value = 0
  for (const k in userAnswers) delete userAnswers[k]
  state.value = STATE.RUNNING
}

const currentQuestion = computed(() => quizQuestions.value[currentIndex.value])
const isLast = computed(() => currentIndex.value === quizQuestions.value.length - 1)
const answeredCurrent = computed(() => userAnswers[currentQuestion.value?.id] !== undefined)

function selectOption(optIdx) {
  userAnswers[currentQuestion.value.id] = optIdx
}

function goNext() {
  if (isLast.value) {
    state.value = STATE.RESULTS
  } else {
    currentIndex.value++
  }
}
function goPrev() {
  if (currentIndex.value > 0) currentIndex.value--
}

const score = computed(() => {
  let correct = 0
  for (const q of quizQuestions.value) {
    if (userAnswers[q.id] === q.correct) correct++
  }
  return correct
})
const scorePercent = computed(() => {
  if (quizQuestions.value.length === 0) return 0
  return Math.round((score.value / quizQuestions.value.length) * 100)
})

function topicTitle(id) {
  const t = TOPICS.find(t => t.id === id)
  return t ? t.title : id
}

function renderExplanation(explanation: string): string {
  return renderMarkdown(explanation)
}

function restart() {
  state.value = STATE.SETUP
}
</script>

<template>
  <div>
    <!-- SETUP -->
    <div v-if="state === 'setup'" class="bg-gray-900 border border-gray-800 rounded-[10px] p-8 text-center max-w-[560px] mx-auto my-10 shadow-lg">
      <h2 class="mt-0">Teszt indítása</h2>
      <p class="text-gray-400 text-base">Válaszd ki, hány kérdésből álljon a teszt. A kérdések véletlenszerű sorrendben jelennek meg. A teszt végén megkapod az eredményedet és minden kérdéshez a részletes magyarázatot.</p>
      <div class="flex justify-center gap-2.5 my-5 flex-wrap">
        <button
          v-for="n in questionCountOptions"
          :key="n"
          :class="[
            'border px-4 py-2.5 rounded-lg font-bold cursor-pointer text-base',
            selectedCount === n
              ? 'bg-amber-500 border-amber-500 text-white'
              : 'border-gray-800 bg-gray-900 text-gray-100'
          ]"
          @click="selectedCount = n"
        >
          {{ n }} kérdés
        </button>
      </div>
      <button class="bg-amber-500 text-white border-0 px-7 py-3 rounded-lg font-bold text-base cursor-pointer hover:bg-amber-600" @click="startQuiz">Teszt indítása</button>
    </div>

    <!-- RUNNING -->
    <div v-else-if="state === 'running'">
      <div class="h-2 bg-gray-800 rounded overflow-hidden mb-1.5">
        <div class="h-full bg-amber-500 transition-all duration-[250ms]" :style="{ width: ((currentIndex + 1) / quizQuestions.length * 100) + '%' }"></div>
      </div>
      <p class="text-base text-gray-400 m-0 mb-4">Kérdés {{ currentIndex + 1 }} / {{ quizQuestions.length }}</p>

      <div class="bg-gray-900 border border-gray-800 rounded-[10px] p-6 shadow-lg">
        <div class="inline-block text-base font-bold uppercase tracking-wide text-blue-400 bg-slate-800 px-2 py-0.5 rounded-xl mb-2.5">{{ topicTitle(currentQuestion.topic) }}</div>
        <h3 class="my-1.5 mb-4 text-xl">{{ currentQuestion.question }}</h3>
        <div class="flex flex-col gap-2.5">
          <button
            v-for="(opt, i) in currentQuestion.options"
            :key="i"
            :class="[
              'text-left border-2 px-4 py-3 rounded-lg text-base cursor-pointer transition-all',
              userAnswers[currentQuestion.id] === i
                ? 'border-amber-500 bg-amber-950/40 font-semibold'
                : 'border-gray-800 bg-gray-900 hover:border-amber-500'
            ]"
            @click="selectOption(i)"
          >
            {{ opt }}
          </button>
        </div>
      </div>

      <div class="flex justify-between mt-5">
        <button
          class="border border-gray-800 bg-gray-900 px-3.5 py-2 rounded-lg cursor-pointer text-base font-semibold text-gray-100 transition-all hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed"
          :disabled="currentIndex === 0"
          @click="goPrev"
        >&larr; Előző</button>
        <button
          class="bg-amber-500 border-amber-500 text-white px-3.5 py-2 rounded-lg cursor-pointer text-base font-semibold transition-all hover:bg-amber-600 disabled:opacity-40 disabled:cursor-not-allowed"
          :disabled="!answeredCurrent"
          @click="goNext"
        >
          {{ isLast ? 'Teszt befejezése' : 'Következő &rarr;' }}
        </button>
      </div>
    </div>

    <!-- RESULTS -->
    <div v-else-if="state === 'results'">
      <div class="bg-gray-900 border border-gray-800 rounded-[10px] p-7 text-center shadow-lg mb-6">
        <h2 class="mt-0">Eredmény: {{ score }} / {{ quizQuestions.length }} ({{ scorePercent }}%)</h2>
        <p v-if="scorePercent >= 80" class="text-[19px] font-semibold text-emerald-500">Kiváló eredmény! 🎉</p>
        <p v-else-if="scorePercent >= 60" class="text-[19px] font-semibold text-amber-600">Jó alap, de érdemes még gyakorolni. 💪</p>
        <p v-else class="text-[19px] font-semibold text-red-500">Nézd át még egyszer a tananyagot, és próbáld újra! 📘</p>
        <button class="bg-amber-500 text-white border-0 px-7 py-3 rounded-lg font-bold text-base cursor-pointer hover:bg-amber-600" @click="restart">Új teszt indítása</button>
      </div>

      <div class="flex flex-col gap-3.5">
        <div
          v-for="(q, i) in quizQuestions"
          :key="q.id"
          :class="[
            'bg-gray-900 border rounded-[10px] p-4 px-5 shadow-lg',
            userAnswers[q.id] === q.correct ? 'border-l-4 border-emerald-500' : 'border-l-4 border-red-500'
          ]"
        >
          <div class="inline-block text-base font-bold uppercase tracking-wide text-blue-400 bg-slate-800 px-2 py-0.5 rounded-xl mb-2.5">{{ topicTitle(q.topic) }}</div>
          <p class="text-[19px] my-1 mb-3"><b>{{ i + 1 }}.</b> {{ q.question }}</p>
          <ul class="list-none p-0 m-0 mb-3 flex flex-col gap-1.5">
            <li
              v-for="(opt, oi) in q.options"
              :key="oi"
              :class="[
                'text-base px-2.5 py-1.5 rounded-md flex items-center gap-2',
                oi === q.correct ? 'bg-emerald-950/50 font-semibold' : '',
                oi === userAnswers[q.id] && oi !== q.correct ? 'bg-red-950/50 font-semibold' : '',
                oi !== q.correct && oi !== userAnswers[q.id] ? 'bg-gray-800' : ''
              ]"
            >
              <span v-if="oi === q.correct">✅</span>
              <span v-else-if="oi === userAnswers[q.id]">❌</span>
              <span v-else class="opacity-30 text-base">&#9679;</span>
              {{ opt }}
            </li>
          </ul>
          <div class="text-base text-gray-400 m-0 mb-2 markdown-content" v-html="renderExplanation(q.explanation)"></div>
        </div>
      </div>
    </div>
  </div>
</template>
