<template>
  <div class="section1">
    <div class="left_wrap">
      <!-- <img :src="require(`@/assets/img/iphone/market/${selectColor}.png`)" class="img--market" :alt="`iphone11_market_color_${selectColor}`" :title="`iphone11_market_color_${selectColor}`"> -->
      <img :src="abc(selectColor)" class="img--market" :alt="`iphone11_market_color_${selectColor}`" :title="`iphone11_market_color_${selectColor}`">
    </div>
    <div class="right_wrap">
      <h3 class="market--title">iPhone11 구입하기</h3>
      <p class="market--contents">$2,000 부터</p>
      <p class="text-bold">마음에 쏙 드는 색상을 선택하세요.</p>
      <div class="color_wrap">
        <div class="color" :class="{ 'selected': item.id === selectColor }" v-for="(item, index) in colorArr" :key="`color_${index}`" @click="choiceColor(item.id)">
          <div class="colorBall" :class="`colorBall-${item.id}`"></div>
          <span class="colorName">{{ item.name }}</span>
        </div>
        <small>레드 모델은 정말 예뻐요.(I Like it!)</small>
      </div>
      <p class="text-bold">충분한 용량을 선택하세요.</p>
      <div class="storage_wrap">
        <div class="storage" :class="{ 'selected': item.storage === selectStorage }" v-for="(item, index) in storageArr" :key="`storage_${index}`" @click="choiceStorage(item.storage)">
          <p class="storageName">{{ item.storage }}</p>
          <p class="price">{{ item.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectColor: 'black',
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
      }],
      selectStorage: '256GB',
      storageArr: [{
        storage: '128GB',
        price: '$2,000'
      }, {
        storage: '256GB',
        price: '$2,760'
      }, {
        storage: '1TB',
        price: '$3,540'
      }, {
        storage: '2TB',
        price: '$4,000'
      }]
    }
  },
  methods: {
    choiceColor (color) {
      this.selectColor = color
    },
    choiceStorage (storage) {
      this.selectStorage = storage
    },
    abc (color) {
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

<style lang="scss" scoped>
$market-white: rgb(249, 246, 239);
$market-black: rgb(31, 33, 32);
$market-green: rgb(173, 224, 205);
$market-yellow: rgb(255, 230, 129);
$market-purple: rgb(209, 205, 219);
$market-red: rgb(186, 12, 47);

.section1 {
  margin: 0 auto;
  max-width: 980px;
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
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  border-bottom: 1px dashed darkgrey;
}

.color_wrap, .storage_wrap {
  width: 100%;
  .color:nth-child(odd), .storage:nth-child(odd) {
    margin-left: 0;
  }
  .color:nth-child(even), .storage:nth-child(even) {
    margin-right: 0;
  }

  .color, .storage {
    display: inline-block;
    text-align: center;
    cursor: pointer;
    width: calc(50% - .5rem);
    padding: 6% 0;
    border: 1px solid darkgrey;
    border-radius: .3rem;
    margin: .5rem;

    &:hover {
      border-color: gray;
    }
    &:active, &.selected {
      box-shadow: 0px 0px .35rem .01rem #0070c9;
      border-color: #0070c9;
    }
  }
  .storageName {
    font-size: 1.8rem;
  }
  .price {
    font-size: 1.1rem;
    color: gray;
  }

  .colorBall {
    margin: 0 auto .25rem;
    width: 2rem;
    height: 2rem;
    border-radius: 2rem;
    &.colorBall-white {
      background-color: $market-white;
      border-color: rgba($market-white, .5);
    }
    &.colorBall-black {
      background-color: $market-black;
      border-color: rgba($market-black, .5);
    }
    &.colorBall-green {
      background-color: $market-green;
      border-color: rgba($market-green, .5);
    }
    &.colorBall-yellow {
      background-color: $market-yellow;
      border-color: rgba($market-yellow, .5);
    }
    &.colorBall-purple {
      background-color: $market-purple;
      border-color: rgba($market-purple, .5);
    }
    &.colorBall-red {
      background-color: $market-red;
      border-color: rgba($market-red, .5);
    }
  }
}
</style>>
