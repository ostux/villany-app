<script setup lang="ts">
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const tabs = [
  { id: "study", label: "Tananyag", path: "/study" },
  { id: "practice", label: "Gyakorlás", path: "/practice" },
  { id: "circuits", label: "Rajzos feladatok", path: "/circuits" },
  { id: "symbols", label: "Jelképek", path: "/symbols" },
  { id: "quiz", label: "Teszt", path: "/quiz" },
];

const activeTab = computed(() => {
  const path = route.path;
  if (path.startsWith("/study")) return "study";
  if (path.startsWith("/practice")) return "practice";
  if (path.startsWith("/circuits")) return "circuits";
  if (path.startsWith("/symbols")) return "symbols";
  if (path.startsWith("/quiz")) return "quiz";
  return "";
});

const navigateToTab = (path: string) => {
  router.push(path);
};
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
        <div class="flex items-center gap-3 cursor-pointer" @click="router.push('/')">
          <span
            class="text-3xl bg-amber-500 w-11 h-11 rounded-[10px] flex items-center justify-center shrink-0"
            >⚡</span
          >
          <div>
            <h1 class="text-xl m-0 font-bold">Villanyszerelő/CS</h1>
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
              activeTab === tab.id
                ? 'bg-amber-500 text-white'
                : 'bg-transparent text-gray-300 hover:bg-white/10 hover:text-white',
            ]"
            @click="navigateToTab(tab.path)"
          >
            {{ tab.label }}
          </button>
        </nav>
      </div>
    </header>

    <main class="flex-1 max-w-[1500px] mx-auto w-full px-5 py-6 pb-15">
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
