<script setup lang="ts">
import { ref, computed, watch, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { TOPICS, CATEGORIES } from '../data'
import { loadMarkdownFile, renderMarkdown } from '../utils/markdownRenderer'

const route = useRoute()
const router = useRouter()

// Track mobile sidebar visibility
const isSidebarOpen = ref(false)

// Track which categories are expanded (all expanded by default)
const expandedCategories = reactive<Record<string, boolean>>(
  CATEGORIES.reduce((acc, cat) => {
    acc[cat.id] = true
    return acc
  }, {} as Record<string, boolean>)
)

// Group topics by category
const topicsByCategory = computed(() => {
  return CATEGORIES.map(category => ({
    ...category,
    topics: TOPICS.filter(topic => topic.category === category.id)
  }))
})

function toggleCategory(categoryId: string) {
  expandedCategories[categoryId] = !expandedCategories[categoryId]
}

const activeId = computed(() => {
  const topicId = route.params.topicId as string | undefined
  if (topicId) {
    // Validate topic exists
    const topicExists = TOPICS.some(t => t.id === topicId)
    if (topicExists) {
      return topicId
    }
    // Invalid topic, redirect to home
    router.push('/villany-app')
    return null
  }
  // No topic selected, redirect to first topic
  if (route.path === '/villany-app/study' && TOPICS.length > 0) {
    router.push(`/villany-app/study/${TOPICS[0].id}`)
    return null
  }
  return null
})

const activeTopic = computed(() => {
  if (!activeId.value) return null
  return TOPICS.find(t => t.id === activeId.value)
})
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
  router.push(`/villany-app/study/${id}`)
  window.scrollTo({ top: 0, behavior: 'smooth' })
  // Close sidebar on mobile after selecting a topic
  isSidebarOpen.value = false
}

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value
}

function next() {
  if (!activeId.value) return
  const idx = TOPICS.findIndex(t => t.id === activeId.value)
  if (idx < TOPICS.length - 1) select(TOPICS[idx + 1].id)
}
function prev() {
  if (!activeId.value) return
  const idx = TOPICS.findIndex(t => t.id === activeId.value)
  if (idx > 0) select(TOPICS[idx - 1].id)
}
const idx = computed(() => {
  if (!activeId.value) return -1
  return TOPICS.findIndex(t => t.id === activeId.value)
})
</script>

<template>
  <div>
    <!-- Mobile sidebar toggle button -->
    <button
      @click="toggleSidebar"
      class="lg:hidden mb-4 w-full flex items-center justify-between bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-left hover:bg-gray-800 transition-colors"
    >
      <span class="flex items-center gap-2 font-semibold text-base">
        <span class="text-xl">📚</span>
        <span>{{ activeTopic?.title || 'Válassz témakört' }}</span>
      </span>
      <span class="text-gray-400 text-xl transition-transform duration-200" :class="{ 'rotate-180': isSidebarOpen }">
        ▼
      </span>
    </button>

    <div class="grid lg:grid-cols-[320px_1fr] gap-5 items-start">
      <!-- Sidebar with mobile overlay -->
      <aside
        :class="[
          'flex flex-col gap-2 bg-gray-900 border border-gray-800 rounded-[10px] p-2 overflow-y-auto',
          'lg:sticky lg:top-[88px] lg:max-h-[calc(100vh-110px)]',
          // Mobile styles
          'fixed lg:static inset-0 z-50 lg:z-auto',
          'transition-transform duration-300 lg:transform-none',
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
          'max-h-screen lg:max-h-[calc(100vh-110px)]'
        ]"
      >
        <!-- Mobile close button -->
        <button
          @click="toggleSidebar"
          class="lg:hidden sticky top-0 bg-gray-800 text-gray-100 px-4 py-2 rounded-lg mb-2 font-semibold flex items-center justify-between z-10"
        >
          <span>Témakörök</span>
          <span class="text-xl">✕</span>
        </button>
      <div v-for="category in topicsByCategory" :key="category.id" class="mb-1">
        <!-- Category Header -->
        <button
          @click="toggleCategory(category.id)"
          class="w-full text-left border-0 rounded-lg p-2.5 px-3 cursor-pointer flex items-center justify-between bg-gray-800 hover:bg-gray-750 transition-all duration-150 mb-1"
        >
          <div class="flex items-center gap-2">
            <span class="text-xl">{{ category.icon }}</span>
            <span class="text-base font-bold text-amber-500">{{ category.title }}</span>
          </div>
          <span class="text-gray-400 text-lg transition-transform duration-200" :class="{ 'rotate-180': expandedCategories[category.id] }">
            ▼
          </span>
        </button>

        <!-- Topics in Category (collapsible) -->
        <transition
          enter-active-class="transition-all duration-200 ease-out"
          leave-active-class="transition-all duration-200 ease-in"
          enter-from-class="opacity-0 max-h-0"
          enter-to-class="opacity-100 max-h-[2000px]"
          leave-from-class="opacity-100 max-h-[2000px]"
          leave-to-class="opacity-0 max-h-0"
        >
          <div v-show="expandedCategories[category.id]" class="flex flex-col gap-1 overflow-hidden">
            <button
              v-for="topic in category.topics"
              :key="topic.id"
              :class="[
                'text-left border-0 rounded-lg p-2.5 px-3 ml-2 cursor-pointer flex flex-col gap-0.5 transition-all duration-150',
                topic.id === activeId
                  ? 'bg-amber-950/40 border-l-2 border-amber-500'
                  : 'bg-transparent hover:bg-gray-800'
              ]"
              @click="select(topic.id)"
            >
              <span :class="['text-[15px] font-bold', topic.id === activeId ? 'text-amber-500' : 'text-gray-100']">{{ topic.title }}</span>
              <span class="text-[14px] text-gray-400">{{ topic.summary }}</span>
            </button>
          </div>
        </transition>
      </div>
      </aside>

      <section v-if="activeTopic" class="bg-gray-900 border border-gray-800 rounded-[10px] p-5 md:p-7 px-5 md:px-8 shadow-lg overflow-hidden min-w-0">
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
      <div v-if="idx >= 0" class="flex items-center justify-between gap-2 mt-7 pt-4 border-t border-gray-800">
        <button
          class="border border-gray-800 bg-gray-900 px-4 sm:px-3.5 py-4 sm:py-3 rounded-lg cursor-pointer text-base font-semibold text-gray-100 transition-all hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-1.5"
          :disabled="idx === 0"
          @click="prev"
          title="Előző téma"
        >
          <span class="text-5xl sm:text-base">&larr;</span>
          <span class="hidden sm:inline">Előző téma</span>
        </button>
        <span class="text-sm sm:text-base text-gray-400 whitespace-nowrap">{{ idx + 1 }} / {{ TOPICS.length }}</span>
        <button
          class="bg-amber-500 border-amber-500 text-white px-4 sm:px-3.5 py-4 sm:py-3 rounded-lg cursor-pointer text-base font-semibold transition-all hover:bg-amber-600 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-1.5"
          :disabled="idx === TOPICS.length - 1"
          @click="next"
          title="Következő téma"
        >
          <span class="hidden sm:inline">Következő téma</span>
          <span class="text-5xl sm:text-base">&rarr;</span>
        </button>
      </div>
      </section>
    </div>

    <!-- Mobile backdrop overlay -->
    <div
      v-if="isSidebarOpen"
      @click="toggleSidebar"
      class="lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
    ></div>
  </div>
</template>
