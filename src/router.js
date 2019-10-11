import Vue from 'vue'
import Router from 'vue-router'
import Home from './templates/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/iphones-11',
      name: 'IPhone11',
      component: () => import('./templates/iphone-11/views/IPhone11')
    }
  ]
})
