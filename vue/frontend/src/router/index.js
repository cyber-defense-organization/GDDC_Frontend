import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/chart',
    name: 'chart',
    component: () => import('../views/chartEx.vue')
  },
  {
    path: '/nav',
    name: 'nav',
    component: () => import('../components/navbar.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
