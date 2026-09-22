<script setup lang="ts">
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { TOPICS, CATEGORIES } from "./data";

const router = useRouter();
const route = useRoute();

const tabs = [
  { id: "study", label: "Tananyag", icon: "📚", path: "/villany-app/study" },
  { id: "practice", label: "Gyakorlás", icon: "✏️", path: "/villany-app/practice" },
  { id: "circuits", label: "Rajzos feladatok", icon: "🔌", path: "/villany-app/circuits" },
  { id: "symbols", label: "Jelképek", icon: "🔣", path: "/villany-app/symbols" },
  { id: "quiz", label: "Teszt", icon: "📝", path: "/villany-app/quiz" },
];

const activeTab = computed(() => {
  const path = route.path;
  if (path.startsWith("/villany-app/study")) return "study";
  if (path.startsWith("/villany-app/practice")) return "practice";
  if (path.startsWith("/villany-app/circuits")) return "circuits";
  if (path.startsWith("/villany-app/symbols")) return "symbols";
  if (path.startsWith("/villany-app/quiz")) return "quiz";
  return "";
});

const navigateToTab = (path: string) => {
  router.push(path);
};

const subtitle = computed(() => {
  switch (activeTab.value) {
    case "study": {
      // If we're viewing a specific topic, show its category title
      const topicId = route.params.topicId as string | undefined;
      if (topicId) {
        const topic = TOPICS.find(t => t.id === topicId);
        if (topic) {
          const category = CATEGORIES.find(c => c.id === topic.category);
          if (category) {
            return category.title;
          }
        }
      }
      return "Villamos alapismeretek · Elektrotechnika";
    }
    case "practice":
      return "Gyakorlás · Feladatok";
    case "circuits":
      return "Rajzos feladatok · Áramkörök";
    case "symbols":
      return "Jelképek · Szimbólumok";
    case "quiz":
      return "Teszt · Kvíz";
    default:
      return "Villamos alapismeretek · Elektrotechnika";
  }
});
</script>

<template>
  <div
    class="min-h-screen flex flex-col bg-gray-950 text-gray-100 font-sans text-[19px]"
  >
    <header
      class="sticky top-0 z-10 bg-gradient-to-br from-gray-950 to-gray-900 border-b border-gray-800 shadow-lg"
    >
      <div
        class="max-w-[1500px] mx-auto px-4 md:px-5 py-2.5 md:py-3.5 flex items-center justify-between flex-wrap gap-3"
      >
        <div class="flex items-center gap-2 md:gap-3 cursor-pointer" @click="router.push('/villany-app')">
          <span
            class="text-2xl md:text-3xl bg-amber-500 w-9 h-9 md:w-11 md:h-11 rounded-[10px] flex items-center justify-center shrink-0"
            >⚡</span
          >
          <div>
            <h1 class="text-lg md:text-xl m-0 font-bold">Villanyszerelő/CS</h1>
            <p class="text-sm md:text-base mt-0.5 text-gray-400 hidden sm:block">
              {{ subtitle }}
            </p>
          </div>
        </div>
        <nav class="flex flex-grow justify-between gap-1 bg-white/[0.08] p-1 rounded-[10px]">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            :class="[
              'border-0 px-2 sm:px-3 md:px-4 py-2.5 sm:py-3 rounded-lg cursor-pointer text-sm md:text-base font-semibold transition-all duration-150 whitespace-nowrap flex items-center justify-center gap-1.5 flex-grow sm:flex-grow-0',
              activeTab === tab.id
                ? 'bg-amber-500 text-white'
                : 'bg-transparent text-gray-300 hover:bg-white/10 hover:text-white',
            ]"
            @click="navigateToTab(tab.path)"
            :title="tab.label"
          >
            <span class="text-2xl sm:text-xl">{{ tab.icon }}</span>
            <span class="hidden sm:inline">{{ tab.label }}</span>
          </button>
        </nav>
      </div>
    </header>

    <main class="flex-1 max-w-[1500px] mx-auto w-full px-4 md:px-5 py-4 md:py-6 pb-15">
      <router-view />
    </main>

    <footer
      class="text-center text-base text-gray-500 p-4 border-t border-gray-800 bg-gray-900"
    >
      <p>
        Saját tanuláshoz készült segédeszköz &middot; Használat saját
        felelősségre! Hibákat tartalmazhat!
      </p>
    </footer>
  </div>
</template>
