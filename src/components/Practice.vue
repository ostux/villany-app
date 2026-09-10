<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { EXERCISES, TOPICS } from '../data'

const topicFilter = ref('all')
const answers = reactive({})   // id -> user input string
const checked = reactive({})   // id -> { correct: bool, revealed: bool }

const topicOptions = computed(() => [
  { id: 'all', title: 'Összes témakör' },
  ...TOPICS.filter(t => EXERCISES.some(e => e.topic === t.id))
])

const filtered = computed(() => {
  if (topicFilter.value === 'all') return EXERCISES
  return EXERCISES.filter(e => e.topic === topicFilter.value)
})

function topicTitle(id) {
  const t = TOPICS.find(t => t.id === id)
  return t ? t.title : id
}

function normalize(str) {
  if (str == null) return NaN
  return parseFloat(String(str).replace(',', '.').trim())
}

function check(ex) {
  const val = normalize(answers[ex.id])
  const ok = !isNaN(val) && Math.abs(val - ex.answer) <= (ex.tolerance ?? 0.01) + 1e-9
  checked[ex.id] = { correct: ok, revealed: true }
}

function giveUp(ex) {
  checked[ex.id] = { correct: false, revealed: true, gaveUp: true }
}

function reset(ex) {
  delete checked[ex.id]
  answers[ex.id] = ''
}

const solvedCount = computed(() =>
  filtered.value.filter(e => checked[e.id]?.correct).length
)
</script>

<template>
  <div>
    <div class="flex items-center gap-2.5 mb-5 flex-wrap">
      <label for="topic-select" class="font-semibold text-base">Témakör:</label>
      <select id="topic-select" v-model="topicFilter" class="px-2.5 py-2 rounded-lg border border-gray-800 text-base bg-gray-900 text-gray-100 min-w-[220px]">
        <option v-for="t in topicOptions" :key="t.id" :value="t.id">{{ t.title }}</option>
      </select>
      <span class="ml-auto bg-gray-800 border border-gray-700 px-3 py-1.5 rounded-full text-base font-semibold text-gray-400">Megoldva: {{ solvedCount }} / {{ filtered.length }}</span>
    </div>

    <div class="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-4">
      <div
        v-for="ex in filtered"
        :key="ex.id"
        :class="[
          'bg-gray-900 border rounded-[10px] p-4 shadow-lg transition-all',
          checked[ex.id]?.correct ? 'border-emerald-500 bg-emerald-950/30' : '',
          checked[ex.id] && !checked[ex.id]?.correct ? 'border-red-500 bg-red-950/30' : 'border-gray-800'
        ]"
      >
        <div class="inline-block text-base font-bold uppercase tracking-wide text-blue-400 bg-slate-800 px-2 py-0.5 rounded-xl mb-2.5">{{ topicTitle(ex.topic) }}</div>
        <p class="text-[19px] my-0 mb-3.5 font-medium">{{ ex.question }}</p>

        <form class="flex items-center gap-2 flex-wrap" @submit.prevent="check(ex)">
          <input
            type="text"
            inputmode="decimal"
            v-model="answers[ex.id]"
            :disabled="checked[ex.id]?.revealed"
            placeholder="Válasz"
            class="flex-1 min-w-[100px] px-2.5 py-2 border border-gray-800 rounded-lg text-base bg-gray-900 text-gray-100 disabled:opacity-50"
          />
          <span v-if="ex.unit" class="text-base text-gray-400 font-semibold">{{ ex.unit }}</span>
          <button v-if="!checked[ex.id]?.revealed" type="submit" class="bg-amber-500 text-white border-0 px-4 py-2 rounded-lg font-bold text-base cursor-pointer hover:bg-amber-600">Ellenőrzés</button>
        </form>

        <div v-if="!checked[ex.id]?.revealed" class="mt-2">
          <button class="bg-transparent border-0 text-blue-400 text-base cursor-pointer px-0 py-1 underline" @click="giveUp(ex)">Nem tudom, mutasd a megoldást</button>
        </div>

        <transition
          enter-active-class="transition-opacity duration-200"
          enter-from-class="opacity-0"
        >
          <div v-if="checked[ex.id]?.revealed" class="mt-3 pt-3 border-t border-dashed border-gray-800">
            <p v-if="checked[ex.id].correct" class="text-emerald-500 font-bold m-0 mb-1.5">✅ Helyes!</p>
            <p v-else-if="checked[ex.id].gaveUp" class="text-gray-400 font-bold m-0 mb-1.5">ℹ️ Íme a megoldás:</p>
            <p v-else class="text-red-500 font-bold m-0 mb-1.5">❌ Nem helyes. A helyes válasz: <b>{{ ex.answer }} {{ ex.unit }}</b></p>
            <p class="text-base text-gray-400 m-0 mb-2">{{ ex.explanation }}</p>
            <button class="bg-transparent border-0 text-blue-400 text-base cursor-pointer px-0 py-1 underline" @click="reset(ex)">Újra próbálom</button>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
