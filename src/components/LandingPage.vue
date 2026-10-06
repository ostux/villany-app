<script setup lang="ts">
import { useRouter } from "vue-router";
import { TOPICS } from "../data";

const router = useRouter();

const sections = [
  {
    id: "study",
    title: "Tananyag",
    description: `${TOPICS.length} téma az elektrotechnika alapjaitól`,
    icon: "📚",
    path: "/villany-app/study",
  },
  {
    id: "practice",
    title: "Gyakorlás",
    description: "Numerikus feladatok azonnali visszajelzéssel",
    icon: "✏️",
    path: "/villany-app/practice",
  },
  {
    id: "circuits",
    title: "Rajzos feladatok",
    description: "Véletlenszerűen generált áramköri feladatok",
    icon: "⚡",
    path: "/villany-app/circuits",
  },
  {
    id: "quiz",
    title: "Teszt",
    description: "Feleletválasztós kvíz testreszabható beállításokkal",
    icon: "📝",
    path: "/villany-app/quiz",
  },
];

const navigateTo = (path: string) => {
  router.push(path);
};
</script>

<template>
  <div class="min-h-screen bg-gray-950 py-12 px-4">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-[32px] md:text-[40px] font-bold text-amber-500 mb-4">
          Villanyszerelő
        </h1>
        <h2 class="text-[22px] md:text-[28px] text-gray-300 mb-2">
          Villamos alapismeretek / Elektrotechnika
        </h2>
        <p class="text-[17px] md:text-[19px] text-gray-400 mt-6">
          Oktató alkalmazás villanyszerelők képzéséhez
        </p>
      </div>

      <!-- Navigation Cards -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto"
      >
        <button
          v-for="section in sections"
          :key="section.id"
          @click="navigateTo(section.path)"
          class="bg-gray-900 hover:bg-gray-800 border-2 border-gray-800 hover:border-amber-500 rounded-lg p-8 text-left transition-all duration-200 cursor-pointer group"
        >
          <div class="text-[48px] mb-4">{{ section.icon }}</div>
          <h3
            class="text-[24px] font-bold text-amber-500 mb-3 group-hover:text-amber-400"
          >
            {{ section.title }}
          </h3>
          <p class="text-[17px] text-gray-400 group-hover:text-gray-300">
            {{ section.description }}
          </p>
        </button>
      </div>

      <!-- Footer Info -->
      <div class="text-center mt-12 text-gray-500 text-[16px]">
        <!-- AI Disclaimer -->
        <div
          class="max-w-200 mx-auto mb-12 bg-amber-900/20 border-2 border-amber-700/50 rounded-lg p-6"
        >
          <div class="flex items-start gap-4">
            <div class="text-[32px] shrink-0">⚠️</div>
            <div class="text-[16px] md:text-[17px]">
              <p class="text-gray-300 mb-3">
                Ez az alkalmazás jelentős mértékben mesterséges intelligencia
                segítségével készült, ezért
                <strong class="text-amber-400">hibákat tartalmazhat</strong>. Az
                anyagot mindig ellenőrizd hivatalos forrásokkal!
              </p>
              <p class="text-gray-400 text-[15px]">
                Hibát találtál? Kérlek jelezd az alábbi email címen:&nbsp;
                <a
                  href="mailto:andras+villany@andrastoth.eu"
                  class="text-amber-400 hover:text-amber-300 underline font-mono"
                >
                  andras+villany@andrastoth.eu
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
