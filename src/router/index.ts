import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/stablecoins'
    },
    {
      path: '/:type',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/:type/:id',
      name: 'project',
      component: () => import('../views/ProjectView.vue')
    }
  ]
})

export default router
