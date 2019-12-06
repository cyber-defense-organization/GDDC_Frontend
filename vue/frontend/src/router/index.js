import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/index.vue')
  },
  {
    path: '/chart',
    name: 'chart',
    component: () => import('../components/barChart.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/admin.vue')
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import('../views/shop.vue')
  },
  {
    path: '/scoreboard',
    name: 'scoreboard',
    component: () => import('../views/scoreboard.vue')
  },
  {
    path: '/team',
    name: 'team',
    component: () => import('../views/team.vue')
  },
  {
    path: '/route',
    name: 'route',
    component: () => import('../components/route.vue')
  }
]

const router = new VueRouter({
  mode: 'history', // Important to avoid #
  base: process.env.BASE_URL,
  routes
})

export default router
