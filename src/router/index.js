import { createRouter, createWebHashHistory } from 'vue-router'

// 映射关系: path->component
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/views/home/Home.vue')
  },
  {
    path: '/favor',
    component: () => import('@/views/favor/Favor.vue')
  },
  {
    path: '/order',
    component: () => import('@/views/order/Order.vue')
  },
  {
    path: '/message',
    component: () => import('@/views/message/Message.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router