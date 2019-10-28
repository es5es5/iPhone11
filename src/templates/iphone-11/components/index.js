export default {
  install (Vue) {
    Vue.component('BtnNormal', () => import('./button/BtnNormal'))
  }
}
