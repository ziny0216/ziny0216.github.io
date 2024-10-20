import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/main',
    name: 'Main',
    component: () => import('@/views/main/Main.vue'),
  },

  {
    path: '/',
    redirect: '/main',
  },
  // {
  //   path: '/notFound',
  //   name: 'notFound',
  //   component: () => import('../views/error/NotFound.vue'),
  // },
  // {
  //   path: '/:pathMatch(.*)*',
  //   redirect: '/notFound',
  // },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
