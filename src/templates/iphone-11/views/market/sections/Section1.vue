<template>
  <div class="section1">
    <div class="left_wrap">
      <img :src="require(`@/assets/img/iphone/market/${selectColor}.png`)" class="img--market" :alt="`iphone11_market_color_${selectColor}`" :title="`iphone11_market_color_${selectColor}`">
    </div>
    <div class="right_wrap">
      <h3>iPhone11 구입하기</h3>
      <p>₩990,000 부터</p>
      <p>맘에 드는 마감을 선택하세요.</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectColor: 'red',
      colorArr: [{
        id: 'black',
        name: '블랙'
      }, {
        id: 'green',
        name: '그린'
      }, {
        id: 'red',
        name: '레드'
      }, {
        id: 'yellow',
        name: '옐로'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.section1 {
  width: 980px;
  margin: 0 auto;
}
.left_wrap {
  width: 50%;
  float: left;
}
.img--market {
  width: 100%;
  height: 100%;
}
.right_wrap {
  width: 50%;
  float: right;
}
</style>>
