<script setup lang="ts">
import { ref, computed } from 'vue'
import { ELECTRICAL_SYMBOLS, SYMBOL_CATEGORIES, getSymbolsByCategory } from '../electricalSymbols'

const selectedCategory = ref<string>('all')

const filteredSymbols = computed(() => {
  if (selectedCategory.value === 'all') {
    return ELECTRICAL_SYMBOLS
  }
  return getSymbolsByCategory(selectedCategory.value)
})

const categoryCount = (categoryId: string) => {
  return getSymbolsByCategory(categoryId).length
}
</script>

<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="space-y-3">
      <h1 class="text-3xl font-bold text-gray-100">
        Elektromos jelképek könyvtára
      </h1>
      <p class="text-[17px] text-gray-300 leading-relaxed">
        EU/IEC szabvány szerinti elektromos kapcsolási rajzjelek gyűjteménye magyar magyarázatokkal.
        Ezek a szimbólumok szerepelnek a villanyszerelői tervrajzokon és kapcsolási rajzokon.
      </p>
    </div>

    <!-- Category Filter -->
    <div class="space-y-3">
      <h2 class="text-xl font-semibold text-gray-200">Kategória szűrő</h2>
      <div class="flex flex-wrap gap-2">
        <button
          @click="selectedCategory = 'all'"
          :class="[
            'px-4 py-2 rounded-lg font-medium transition-colors text-[15px]',
            selectedCategory === 'all'
              ? 'bg-amber-500 text-gray-950'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          ]"
        >
          Összes ({{ ELECTRICAL_SYMBOLS.length }})
        </button>
        <button
          v-for="cat in SYMBOL_CATEGORIES"
          :key="cat.id"
          @click="selectedCategory = cat.id"
          :class="[
            'px-4 py-2 rounded-lg font-medium transition-colors text-[15px]',
            selectedCategory === cat.id
              ? 'bg-amber-500 text-gray-950'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          ]"
        >
          {{ cat.label }} ({{ categoryCount(cat.id) }})
        </button>
      </div>
    </div>

    <!-- Symbols Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="symbol in filteredSymbols"
        :key="symbol.id"
        class="bg-gray-800 rounded-lg p-5 space-y-4 border border-gray-700 hover:border-amber-500/50 transition-colors"
      >
        <!-- Symbol SVG -->
        <div class="bg-gray-900 rounded-lg p-6 flex items-center justify-center min-h-[140px]">
          <svg
            :viewBox="symbol.svg.viewBox"
            class="w-full max-w-[200px] h-auto [&_path]:stroke-gray-100 [&_path]:stroke-2 [&_path]:fill-none [&_path]:stroke-linejoin-round [&_path]:stroke-linecap-round [&_circle]:fill-gray-100 [&_text]:fill-gray-100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              v-for="(pathData, idx) in symbol.svg.paths"
              :key="idx"
              :d="pathData"
            />
          </svg>
        </div>

        <!-- Symbol Info -->
        <div class="space-y-2">
          <div class="flex items-start justify-between gap-2">
            <h3 class="text-lg font-bold text-amber-500">
              {{ symbol.label }}
            </h3>
            <span class="text-xs text-gray-500 bg-gray-700 px-2 py-1 rounded uppercase tracking-wide">
              {{ SYMBOL_CATEGORIES.find(c => c.id === symbol.category)?.label }}
            </span>
          </div>

          <p class="text-[15px] text-gray-300 leading-relaxed">
            {{ symbol.explanation }}
          </p>

          <div class="pt-2 border-t border-gray-700">
            <p class="text-xs text-gray-500">
              <span class="font-semibold">Angol név:</span> {{ symbol.name }}
            </p>
            <p class="text-xs text-gray-500 font-mono">
              <span class="font-semibold">ID:</span> {{ symbol.id }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Info Box -->
    <div class="bg-emerald-900/20 border border-emerald-700/50 rounded-lg p-5">
      <h3 class="text-lg font-bold text-emerald-400 mb-2">
        💡 Tudnivalók
      </h3>
      <ul class="space-y-2 text-[15px] text-gray-300">
        <li class="flex gap-2">
          <span class="text-emerald-400">•</span>
          <span>
            Ezek a szimbólumok az EU/IEC szabványnak megfelelőek, amelyeket Magyarországon használunk.
          </span>
        </li>
        <li class="flex gap-2">
          <span class="text-emerald-400">•</span>
          <span>
            Az amerikai (US) szabvány néha eltérő jeleket használ (pl. cikk-cakk ellenállás vs. téglalap ellenállás).
          </span>
        </li>
        <li class="flex gap-2">
          <span class="text-emerald-400">•</span>
          <span>
            Minden szimbólumnál szerepel a magyar elnevezés és magyarázat, az angol név, valamint egy egyedi azonosító (ID).
          </span>
        </li>
        <li class="flex gap-2">
          <span class="text-emerald-400">•</span>
          <span>
            Ezeket a szimbólumokat a gyakorlati feladatoknál és kapcsolási rajzoknál is használjuk az alkalmazásban.
          </span>
        </li>
      </ul>
    </div>

    <!-- Legend -->
    <div class="bg-blue-900/20 border border-blue-700/50 rounded-lg p-5">
      <h3 class="text-lg font-bold text-blue-400 mb-3">
        📘 Kategóriák magyarázata
      </h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-[15px]">
        <div v-for="cat in SYMBOL_CATEGORIES" :key="cat.id" class="flex items-start gap-2">
          <span class="text-blue-400 font-bold">•</span>
          <div>
            <span class="font-semibold text-gray-200">{{ cat.label }}:</span>
            <span class="text-gray-400 ml-1">
              <template v-if="cat.id === 'basic'">
                Alapvető villamos elemek (lámpa, csengő, fűtés)
              </template>
              <template v-else-if="cat.id === 'sources'">
                Feszültség- és áramforrások (elem, akkumulátor, generátor)
              </template>
              <template v-else-if="cat.id === 'passive'">
                Passzív alkatrészek (ellenállás, kondenzátor, tekercs)
              </template>
              <template v-else-if="cat.id === 'switches'">
                Kapcsolók és nyomógombok
              </template>
              <template v-else-if="cat.id === 'protection'">
                Védőelemek (biztosíték, kismegszakító, RCD)
              </template>
              <template v-else-if="cat.id === 'measurement'">
                Mérőműszerek (voltmérő, ampermérő, wattmérő)
              </template>
              <template v-else-if="cat.id === 'motors'">
                Motorok és generátorok
              </template>
              <template v-else-if="cat.id === 'transformers'">
                Transzformátorok
              </template>
              <template v-else-if="cat.id === 'semiconductors'">
                Félvezető eszközök (dióda, LED, tranzisztor, MOSFET)
              </template>
              <template v-else-if="cat.id === 'connections'">
                Csatlakozások és vezetékek
              </template>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
