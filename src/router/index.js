import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from './models/layout'

Vue.use(VueRouter)

const routes = [
  ...layout,//主页路由,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
