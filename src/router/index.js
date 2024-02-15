import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/HomeView.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/AboutView.vue')
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/ProductsView.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/admin/',
    component: () => import('../views/dashBoard/DashBoardView.vue'),
    children: [
      {
        path: 'productsControl',
        name: 'ProductsControl',
        component: () => import('../views/dashBoard/ProductsControl.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
