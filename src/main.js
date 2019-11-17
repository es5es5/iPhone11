import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import GlobalComponents from './templates/iphone-11/components'
import GlobalFilters from './filters'

import './plugins/vue-awesome'

Vue.use(GlobalComponents)
Vue.use(GlobalFilters)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
