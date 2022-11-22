import { createRouter, createWebHistory } from 'vue-router'
import App from '../index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: App
    },
    {
      path: '/document',
      name: 'document',
      component: () => import('../components/index.vue'),
      children: [
        {
          path: 'button',
          name: 'button',
          component: () => import('../components/button/index.vue')
        },
        {
          path: 'tag',
          name: 'tag',
          component: () => import('../components/tag/index.vue')
        }
      ]
    }
  ]
})

export default router
