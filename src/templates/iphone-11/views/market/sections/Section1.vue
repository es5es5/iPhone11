<template>
  <div class="section1">
    <div class="left_wrap">
      <img :src="require(`@/assets/img/iphone/market/${selectColor}.png`)" class="img--market" :alt="`iphone11_market_color_${selectColor}`" :title="`iphone11_market_color_${selectColor}`">
    </div>
    <div class="right_wrap">
      <h3>iPhone11 구입하기</h3>
      <p>₩990,000 부터</p>
      <p>맘에 드는 마감을 선택하세요.</p>
      <div class="color_wrap">
        <div class="color" v-for="(item, index) in colorArr" :key="`color_${index}`">
          <div class="colorBall" :style="`background-color: ${item.id}`"></div>
          <span class="colorName">{{ item.name }}</span>
        </div>
      </div>
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
        id: 'purple',
        name: '퍼플'
      }, {
        id: 'yellow',
        name: '옐로'
      }, {
        id: 'white',
        name: '화이트'
      }, {
        id: 'red',
        name: '레드'
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

.color_wrap {
  width: 100%;

  .color {
    display: inline-block;
    text-align: center;
    cursor: pointer;
    box-sizing: border-box;
    width: calc(50% - 1rem);
    padding-top: 15%;
    border: 1px solid #ddd;
    margin: .5rem;

    &:active {
      box-sizing: border-box;      
      border: 2px solid blue;
    }
  }
  .colorBall {
    margin: 0 auto;
    width: 2.5rem;
    height: 2.5rem;
    border: 1px solid #ccc;
    border-radius: 2.5rem;
  }
}
</style>>
