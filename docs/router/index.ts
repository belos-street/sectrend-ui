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
          path: 'divider',
          name: 'divider',
          component: () => import('../components/divider/index.vue')
        },
        {
          path: 'config-provider',
          name: 'config-provider',
          component: () => import('../components/config-provider/index.vue')
        },
        {
          path: 'space',
          name: 'space',
          component: () => import('../components/space/index.vue')
        },
        {
          path: 'popover',
          name: 'popover',
          component: () => import('../components/popover/index.vue')
        },
        {
          path: 'popconfirm',
          name: 'popconfirm',
          component: () => import('../components/popconfirm/index.vue')
        },
        {
          path: 'popdialog',
          name: 'popdialog',
          component: () => import('../components/popdialog/index.vue')
        },
        {
          path: 'dropdown',
          name: 'dropdown',
          component: () => import('../components/dropdown/index.vue')
        },
        {
          path: 'breadcrumb',
          name: 'breadcrumb',
          component: () => import('../components/breadcrumb/index.vue')
        },
        {
          path: 'spin',
          name: 'spin',
          component: () => import('../components/spin/index.vue')
        },
        {
          path: 'drawer',
          name: 'drawer',
          component: () => import('../components/drawer/index.vue')
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
