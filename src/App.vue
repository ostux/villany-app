<script setup lang="ts">
import { ref } from "vue";
import StudyMaterial from "./components/StudyMaterial.vue";
import Practice from "./components/Practice.vue";
import CircuitProblems from "./components/CircuitProblems.vue";
import Quiz from "./components/Quiz.vue";
import SymbolsLibrary from "./components/SymbolsLibrary.vue";

const tabs = [
  { id: "study", label: "Tananyag" },
  { id: "practice", label: "Gyakorlás" },
  { id: "circuits", label: "Rajzos feladatok" },
  { id: "symbols", label: "Jelképek" },
  { id: "quiz", label: "Teszt" },
];
const active = ref("study");
</script>

<template>
  <div
    class="min-h-screen flex flex-col bg-gray-950 text-gray-100 font-sans text-[19px]"
  >
    <header
      class="sticky top-0 z-10 bg-gradient-to-br from-gray-950 to-gray-900 border-b border-gray-800 shadow-lg"
    >
      <div
        class="max-w-[1500px] mx-auto px-5 py-3.5 flex items-center justify-between flex-wrap gap-3"
      >
        <div class="flex items-center gap-3">
          <span
            class="text-3xl bg-amber-500 w-11 h-11 rounded-[10px] flex items-center justify-center shrink-0"
            >⚡</span
          >
          <div>
            <h1 class="text-xl m-0 font-bold">Villanyszerelő/CS 01</h1>
            <p class="text-base mt-0.5 text-gray-400">
              Villamos alapismeretek &middot; Elektrotechnika
            </p>
          </div>
        </div>
        <nav class="flex gap-1 bg-white/[0.08] p-1 rounded-[10px]">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            :class="[
              'border-0 px-4 py-2 rounded-lg cursor-pointer text-base font-semibold transition-all duration-150',
              active === tab.id
                ? 'bg-amber-500 text-white'
                : 'bg-transparent text-gray-300 hover:bg-white/10 hover:text-white',
            ]"
            @click="active = tab.id"
          >
            {{ tab.label }}
          </button>
        </nav>
      </div>
    </header>

    <main class="flex-1 max-w-[1500px] mx-auto w-full px-5 py-6 pb-15">
      <StudyMaterial v-if="active === 'study'" />
      <Practice v-else-if="active === 'practice'" />
      <CircuitProblems v-else-if="active === 'circuits'" />
      <SymbolsLibrary v-else-if="active === 'symbols'" />
      <Quiz v-else-if="active === 'quiz'" />
    </main>

    <footer
      class="text-center text-base text-gray-500 p-4 border-t border-gray-800 bg-gray-900"
    >
      <p>
        Tananyag forrása: 01ea-villszer-202509.pdf &middot; Saját tanuláshoz
        készült segédeszköz
      </p>
    </footer>
  </div>
</template>
