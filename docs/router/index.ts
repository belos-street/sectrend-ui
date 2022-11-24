import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home/index.vue')
    },
    {
      path: '/components',
      name: 'components',
      component: () => import('../components/index.vue'),
      children: [
        {
          path: 'button',
          name: 'button',
          component: () => import('../components/button/index.vue')
        },
        {
          path: 'icon',
          name: 'icon',
          component: () => import('../components/icon/index.vue')
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
