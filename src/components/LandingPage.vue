<script setup lang="ts">
import { useRouter } from 'vue-router'
import { TOPICS } from '../data'

const router = useRouter()

const sections = [
  {
    id: 'study',
    title: 'Tananyag',
    description: `${TOPICS.length} téma az elektrotechnika alapjairól`,
    icon: '📚',
    path: '/study',
  },
  {
    id: 'practice',
    title: 'Gyakorlás',
    description: 'Numerikus feladatok azonnali visszajelzéssel',
    icon: '✏️',
    path: '/practice',
  },
  {
    id: 'circuits',
    title: 'Rajzos feladatok',
    description: 'Véletlenszerűen generált áramköri feladatok',
    icon: '⚡',
    path: '/circuits',
  },
  {
    id: 'symbols',
    title: 'Jelkép könyvtár',
    description: 'Elektromos alkatrészek és jelképeik',
    icon: '🔌',
    path: '/symbols',
  },
  {
    id: 'quiz',
    title: 'Teszt',
    description: 'Feleletválasztós kvíz testreszabható beállításokkal',
    icon: '📝',
    path: '/quiz',
  },
]

const navigateTo = (path: string) => {
  router.push(path)
}
</script>

<template>
  <div class="min-h-screen bg-gray-950 py-12 px-4">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-[40px] font-bold text-amber-500 mb-4">
          Villanyszerelő / CS 01
        </h1>
        <h2 class="text-[28px] text-gray-300 mb-2">
          Villamos alapismeretek / Elektrotechnika
        </h2>
        <p class="text-[19px] text-gray-400 mt-6">
          Offline oktató alkalmazás villanyszerelők képzéséhez
        </p>
      </div>

      <!-- Navigation Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
        <button
          v-for="section in sections"
          :key="section.id"
          @click="navigateTo(section.path)"
          class="bg-gray-900 hover:bg-gray-800 border-2 border-gray-800 hover:border-amber-500 rounded-lg p-8 text-left transition-all duration-200 cursor-pointer group"
        >
          <div class="text-[48px] mb-4">{{ section.icon }}</div>
          <h3 class="text-[24px] font-bold text-amber-500 mb-3 group-hover:text-amber-400">
            {{ section.title }}
          </h3>
          <p class="text-[17px] text-gray-400 group-hover:text-gray-300">
            {{ section.description }}
          </p>
        </button>
      </div>

      <!-- Footer Info -->
      <div class="text-center mt-12 text-gray-500 text-[16px]">
        <p>Az alkalmazás teljesen offline működik, nincs szükség internet kapcsolatra</p>
      </div>
    </div>
  </div>
</template>
