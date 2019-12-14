import Vue from 'vue'
import Router from 'vue-router'
import Home from './templates/Home.vue'
import HomeJSG from './templates/HomeJSG.vue'
import IPhoneRoutes from './templates/iphone-11/routes.js'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/jsg',
      name: 'HomeJSG',
      component: HomeJSG
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

router.beforeEach((to, from, next) => {
  let routeMetaTitle = to.meta.title
  if (routeMetaTitle === undefined || routeMetaTitle === '') {
    document.title = 'Louis Apple'
  } else {
    document.title = `${to.meta.title} | Louis Apple`
  }
  next()
})

export default router
