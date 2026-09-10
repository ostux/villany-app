<script setup lang="ts">
import { ref, reactive } from 'vue'
import { TOPOLOGY_TYPES, generateCircuit } from '../circuits'
import CircuitDiagram from './CircuitDiagram.vue'

const typeFilter = ref('all')
const circuit = ref(generateCircuit(typeFilter.value))
const answers = reactive({})
const checked = reactive({})

function newCircuit() {
  circuit.value = generateCircuit(typeFilter.value)
  Object.keys(answers).forEach(k => delete answers[k])
  Object.keys(checked).forEach(k => delete checked[k])
}

function normalize(str) {
  if (str == null) return NaN
  return parseFloat(String(str).replace(',', '.').trim())
}

function check(q) {
  const val = normalize(answers[q.key])
  const ok = !isNaN(val) && Math.abs(val - q.answer) <= (q.tolerance ?? 0.01) + 1e-9
  checked[q.key] = { correct: ok, revealed: true }
}

function giveUp(q) {
  checked[q.key] = { correct: false, revealed: true, gaveUp: true }
}

function resetQuestion(q) {
  delete checked[q.key]
  answers[q.key] = ''
}

function solvedCount() {
  return circuit.value.questions.filter(q => checked[q.key]?.correct).length
}
</script>

<template>
  <div>
    <div class="flex items-center gap-2.5 mb-5 flex-wrap">
      <label for="type-select" class="font-semibold text-base">Kapcsolás típusa:</label>
      <select id="type-select" v-model="typeFilter" @change="newCircuit" class="px-2.5 py-2 rounded-lg border border-gray-800 text-base bg-gray-900 text-gray-100 min-w-[220px]">
        <option value="all">Véletlen (összes típus)</option>
        <option v-for="t in TOPOLOGY_TYPES" :key="t.id" :value="t.id">{{ t.title }}</option>
      </select>
      <button class="border border-gray-800 bg-gray-900 px-3.5 py-2 rounded-lg font-bold text-base cursor-pointer text-gray-100 hover:bg-gray-800" @click="newCircuit">🔄 Új áramkör</button>
      <span class="ml-auto bg-gray-800 border border-gray-700 px-3 py-1.5 rounded-full text-base font-semibold text-gray-400">Megoldva: {{ solvedCount() }} / {{ circuit.questions.length }}</span>
    </div>

    <div class="bg-gray-900 border border-gray-800 rounded-[10px] p-5 shadow-lg">
      <div>
        <h3 class="m-0 mb-1 text-xl">{{ circuit.title }}</h3>
        <p class="text-gray-400 text-base m-0 mb-4">{{ circuit.description }}</p>
      </div>

      <div class="bg-gray-800 border border-gray-700 rounded-lg p-2.5 mb-5 flex justify-center">
        <CircuitDiagram :circuit="circuit" :key="circuit.id" />
      </div>

      <div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3.5">
        <div
          v-for="q in circuit.questions"
          :key="q.key"
          :class="[
            'bg-gray-900 border rounded-[10px] p-4 transition-all',
            checked[q.key]?.correct ? 'border-emerald-500 bg-emerald-950/30' : '',
            checked[q.key] && !checked[q.key]?.correct ? 'border-red-500 bg-red-950/30' : 'border-gray-800'
          ]"
        >
          <p class="text-[19px] my-0 mb-3.5 font-medium">{{ q.prompt }}</p>

          <form class="flex items-center gap-2 flex-wrap" @submit.prevent="check(q)">
            <input
              type="text"
              inputmode="decimal"
              v-model="answers[q.key]"
              :disabled="checked[q.key]?.revealed"
              placeholder="Válasz"
              class="flex-1 min-w-[100px] px-2.5 py-2 border border-gray-800 rounded-lg text-base bg-gray-900 text-gray-100 disabled:opacity-50"
            />
            <span v-if="q.unit" class="text-base text-gray-400 font-semibold">{{ q.unit }}</span>
            <button v-if="!checked[q.key]?.revealed" type="submit" class="bg-amber-500 text-white border-0 px-4 py-2 rounded-lg font-bold text-base cursor-pointer hover:bg-amber-600">Ellenőrzés</button>
          </form>

          <div v-if="!checked[q.key]?.revealed" class="mt-2">
            <button class="bg-transparent border-0 text-blue-400 text-base cursor-pointer px-0 py-1 underline" @click="giveUp(q)">Nem tudom, mutasd a megoldást</button>
          </div>

          <transition
            enter-active-class="transition-opacity duration-200"
            enter-from-class="opacity-0"
          >
            <div v-if="checked[q.key]?.revealed" class="mt-3 pt-3 border-t border-dashed border-gray-800">
              <p v-if="checked[q.key].correct" class="text-emerald-500 font-bold m-0 mb-1.5">✅ Helyes!</p>
              <p v-else-if="checked[q.key].gaveUp" class="text-gray-400 font-bold m-0 mb-1.5">ℹ️ Íme a megoldás:</p>
              <p v-else class="text-red-500 font-bold m-0 mb-1.5">❌ Nem helyes. A helyes válasz: <b>{{ q.answer }} {{ q.unit }}</b></p>
              <p class="text-base text-gray-400 m-0 mb-2">{{ q.explanation }}</p>
              <button class="bg-transparent border-0 text-blue-400 text-base cursor-pointer px-0 py-1 underline" @click="resetQuestion(q)">Újra próbálom</button>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
