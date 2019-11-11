import Vue from 'vue'
import Router from 'vue-router'
import Home from './templates/Home.vue'
import IPhoneRoutes from './templates/iphone-11/routes.js'

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
      path: '/iphone-11',
      redirect: '/iphone-11/main',
      name: 'IPhone11',
      component: () => import('./templates/iphone-11/views/IPhone11Layout'),
      children: [
        ...IPhoneRoutes
      ]
    }
  ]
})
