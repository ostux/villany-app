import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/villany-app",
    name: "home",
    component: () => import("../components/LandingPage.vue"),
  },
  {
    path: "/villany-app/study",
    name: "study",
    component: () => import("../components/StudyMaterial.vue"),
  },
  {
    path: "/villany-app/study/:topicId",
    name: "study-topic",
    component: () => import("../components/StudyMaterial.vue"),
    props: true,
  },
  {
    path: "/villany-app/practice",
    name: "practice",
    component: () => import("../components/Practice.vue"),
  },
  {
    path: "/villany-app/circuits",
    name: "circuits",
    component: () => import("../components/CircuitProblems.vue"),
  },
  {
    path: "/villany-app/symbols",
    name: "symbols",
    component: () => import("../components/SymbolsLibrary.vue"),
  },
  {
    path: "/villany-app/quiz",
    name: "quiz",
    component: () => import("../components/Quiz.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/villany-app",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0 };
  },
});

export default router;
