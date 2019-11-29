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
    path: '/sb',
    name: 'scorebox',
    component: () => import('../components/scorebox.vue')
  },
  {
    path: '/teamPanel',
    name: 'tp',
    component: () => import('../components/teamPanel.vue')
  },
  {
    path: '/team',
    name: 'tp',
    component: () => import('../views/team.vue')
  },
  {
    path: '/d1',
    name: 'd1',
    component: () => import('../components/dropDown.vue')
  },
  {
    path: '/route',
    name: 'route',
    component: () => import('../components/route.vue')
  },
  {
    path: '/c2',
    name: 'c2',
    component: () => import('../components/c2.vue')
  },
  {
    path: '/liam',
    name: 'liam',
    component: () => import('../components/liam.vue')
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
