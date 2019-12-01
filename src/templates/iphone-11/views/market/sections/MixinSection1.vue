<template>
  <div></div>
</template>

<script>
export default {
  data () {
    return {
      selectColor: 'black',
      colorArr: [
        {
          id: 'red',
          name: '레드'
        }, {
          id: 'yellow',
          name: '옐로'
        }, {
          id: 'white',
          name: '화이트'
        }, {
          id: 'black',
          name: '블랙'
        }, {
          id: 'green',
          name: '그린'
        }, {
          id: 'purple',
          name: '퍼플'
        }
      ],
      selectStorage: {
        storage: '256GB',
        price: '2760'
      },
      storageArr: [
        {
          storage: '128GB',
          price: '1998'
        }, {
          storage: '256GB',
          price: '2758'
        }, {
          storage: '1TB',
          price: '3538'
        }, {
          storage: '2TB',
          price: '3998'
        }
      ],
      selectCare: {
        care: 'LouisCare+',
        content: '알뜰하게 지원',
        price: '198'
      },
      careArr: [
        {
          care: 'LouisCare+',
          content: '알뜰하게 지원',
          price: '198'
        }, {
          care: 'Louis FullCare+',
          content: '안심할 수 있는 최고의 FULL 서비스',
          price: '258'
        }
      ]
    }
  },
  computed: {
    totalPrice () {
      return parseInt(this.selectStorage.price) + parseInt(this.selectCare.price)
    },
    totalPrice_KRW () {
      return (parseInt(this.selectStorage.price) + parseInt(this.selectCare.price)) * 1180
    },
    totalPrice_JPY () {
      return parseInt((parseInt(this.selectStorage.price) + parseInt(this.selectCare.price)) * 109.48)
    }
  },
  methods: {
    choiceColor (color) {
      this.selectColor = color
    },
    choiceStorage (storage) {
      this.selectStorage = storage
    },
    choiceCare (care) {
      this.selectCare = care
    },
    getImageSrc (color) {
      let imgSrc = ''
      try {
        imgSrc = require(`@/assets/img/iphone/market/${color}.png`)
        return imgSrc
      } catch (error) {
        return require(`@/assets/img/iphone/market/red.png`)
      }
    }
  }
}
</script>

<style>

</style>
