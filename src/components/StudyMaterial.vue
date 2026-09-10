<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { TOPICS } from '../data'
import { loadMarkdownFile, renderMarkdown } from '../utils/markdownRenderer'

const activeId = ref(TOPICS[0].id)
const activeTopic = computed(() => TOPICS.find(t => t.id === activeId.value))
const renderedContent = ref<string>('')
const isLoading = ref(false)

async function loadContent(topic: typeof TOPICS[0]) {
  if (!topic.contentPath) {
    renderedContent.value = '<p class="text-gray-400">Tartalom még nem elérhető. Hamarosan elkészül.</p>'
    return
  }

  isLoading.value = true
  try {
    const markdown = await loadMarkdownFile(topic.contentPath)
    renderedContent.value = renderMarkdown(markdown)
  } catch (error) {
    console.error('Error loading topic content:', error)
    renderedContent.value = '<p class="text-red-500">Hiba a tartalom betöltésekor.</p>'
  } finally {
    isLoading.value = false
  }
}

// Load content when active topic changes
watch(activeTopic, (newTopic) => {
  if (newTopic) {
    loadContent(newTopic)
  }
}, { immediate: true })

function select(id: string) {
  activeId.value = id
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function next() {
  const idx = TOPICS.findIndex(t => t.id === activeId.value)
  if (idx < TOPICS.length - 1) select(TOPICS[idx + 1].id)
}
function prev() {
  const idx = TOPICS.findIndex(t => t.id === activeId.value)
  if (idx > 0) select(TOPICS[idx - 1].id)
}
const idx = computed(() => TOPICS.findIndex(t => t.id === activeId.value))
</script>

<template>
  <div class="grid lg:grid-cols-[300px_1fr] gap-5 items-start">
    <aside class="flex flex-col gap-1.5 bg-gray-900 border border-gray-800 rounded-[10px] p-2 sticky top-[88px] max-h-[calc(100vh-110px)] overflow-y-auto lg:block static lg:max-h-[calc(100vh-110px)]">
      <button
        v-for="topic in TOPICS"
        :key="topic.id"
        :class="[
          'text-left border-0 rounded-lg p-2.5 px-3 cursor-pointer flex flex-col gap-0.5 transition-all duration-150',
          topic.id === activeId
            ? 'bg-amber-950/40'
            : 'bg-transparent hover:bg-gray-800'
        ]"
        @click="select(topic.id)"
      >
        <span :class="['text-base font-bold', topic.id === activeId ? 'text-amber-600' : 'text-gray-100']">{{ topic.title }}</span>
        <span class="text-base text-gray-400">{{ topic.summary }}</span>
      </button>
    </aside>

    <section v-if="activeTopic" class="bg-gray-900 border border-gray-800 rounded-[10px] p-7 px-8 shadow-lg">
      <h2 class="mt-0 text-2xl text-gray-100">{{ activeTopic.title }}</h2>

      <!-- Music player if available -->
      <div v-if="activeTopic.musicPath" class="my-5 p-4 bg-gray-950 border border-gray-800 rounded-lg">
        <div class="flex items-center gap-3 mb-2">
          <span class="text-lg">🎵</span>
          <span class="text-base font-semibold text-amber-500">Ellenállás-dal</span>
        </div>
        <audio
          controls
          class="w-full mb-2"
          style="height: 40px;"
        >
          <source :src="activeTopic.musicPath" type="audio/mpeg">
          A böngésző nem támogatja az audio lejátszást.
        </audio>
        <a
          :href="activeTopic.musicPath"
          download="ellenallas-dal.mp3"
          class="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-amber-500 transition-colors"
        >
          <span>⬇️</span>
          <span>Letöltés</span>
        </a>
      </div>

      <div v-if="isLoading" class="text-gray-400 my-4">Betöltés...</div>
      <div v-else v-html="renderedContent"></div>
      <div class="flex items-center justify-between mt-7 pt-4 border-t border-gray-800">
        <button
          class="border border-gray-800 bg-gray-900 px-3.5 py-2 rounded-lg cursor-pointer text-base font-semibold text-gray-100 transition-all hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed"
          :disabled="idx === 0"
          @click="prev"
        >&larr; Előző téma</button>
        <span class="text-base text-gray-400">{{ idx + 1 }} / {{ TOPICS.length }}</span>
        <button
          class="bg-amber-500 border-amber-500 text-white px-3.5 py-2 rounded-lg cursor-pointer text-base font-semibold transition-all hover:bg-amber-600 disabled:opacity-40 disabled:cursor-not-allowed"
          :disabled="idx === TOPICS.length - 1"
          @click="next"
        >Következő téma &rarr;</button>
      </div>
    </section>
  </div>
</template>
