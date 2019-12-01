export default {
  install (Vue) {
    /**
     * 숫자, 천 단위마다 콤마 필터
     */
    Vue.filter('numberWithComma', value => {
      if (value !== 0 && !value) return ''
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    })

    Vue.filter('numberWithCommaDollar', value => {
      if (value !== 0 && !value) return ''
      return `$ ${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
    })

    Vue.filter('numberWithCommaWon', value => {
      if (value !== 0 && !value) return ''
      return `₩ ${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
    })

    Vue.filter('numberWithCommaYen', value => {
      if (value !== 0 && !value) return ''
      return `¥ ${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
    })
  }
}
