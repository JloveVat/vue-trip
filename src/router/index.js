import { createRouter, createWebHashHistory } from 'vue-router'

// 映射关系: path->component
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/Home.vue')
  },
  {
    path: '/favor',
    name: 'favor',
    component: () => import('@/views/favor/Favor.vue')
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('@/views/order/Order.vue')
  },
  {
    path: '/message',
    name: 'message',
    component: () => import('@/views/message/Message.vue')
  },
  {
    path: '/city',
    name: 'city',
    component: () => import('@/views/city/City.vue'),
    // meta: {
    //   hideTabbar: true
    // }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router