import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/LandingPage.vue'),
  },
  {
    path: '/study',
    name: 'study',
    component: () => import('../components/StudyMaterial.vue'),
  },
  {
    path: '/study/:topicId',
    name: 'study-topic',
    component: () => import('../components/StudyMaterial.vue'),
    props: true,
  },
  {
    path: '/practice',
    name: 'practice',
    component: () => import('../components/Practice.vue'),
  },
  {
    path: '/circuits',
    name: 'circuits',
    component: () => import('../components/CircuitProblems.vue'),
  },
  {
    path: '/symbols',
    name: 'symbols',
    component: () => import('../components/SymbolsLibrary.vue'),
  },
  {
    path: '/quiz',
    name: 'quiz',
    component: () => import('../components/Quiz.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  },
})

export default router
