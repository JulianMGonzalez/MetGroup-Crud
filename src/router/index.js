import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/store',
    name: 'store',
    component: () => import('@/views/shop/store/StoreList.vue')
  },
  {
    path: '/store/:id',
    name: 'store-view',
    component: () => import('@/views/shop/store/StorePreview.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/article',
    name: 'article',
    component: () => import('@/views/shop/article/ArticleList.vue'),
  },
  {
    path: '/article/:id',
    name: 'article-view',
    component: () => import('@/views/shop/article/ArticlePreview.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/auth/LoginPage.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/shop/user/UserList.vue'),
  },
  {
    path: '/user/:id',
    name: 'user-view',
    component: () => import('@/views/shop/user/UserStoreList.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: "/:catchAll(.*)",
    name: 'PageNotFound',
    component: () => import('@/components/layout/PageNotFound.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('userMetGroup')) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router
