<template>
  <div class="section1">
    <div class="left_wrap">
      <!-- <img :src="require(`@/assets/img/iphone/market/market_background_img.png`)" class="img--back" :alt="`iphone11_market_color_${selectColor}`" :title="`iphone11_market_color_${selectColor}`"> -->
      <!-- <img :src="getImageSrc(selectColor)" class="img--market" :alt="`iphone11_market_color_${selectColor}`" :title="`iphone11_market_color_${selectColor}`"> -->
      <div class="img_wrap">
        <div class="img--back" :class="selectColor"></div>
      </div>
      <div class="pay_wrap">
        <div class="totalPrice_wrap">
          <h3 class="totalPrice">총 가격: {{ totalPrice | numberWithCommaDollar }}</h3>
          <p>( {{ totalPrice_KRW | numberWithCommaWon }} )</p>
          <p>( {{ totalPrice_JPY | numberWithCommaYen }} )</p>
        </div>
      </div>
    </div>
    <div class="right_wrap">
      <h3 class="market--title">iPhone11 구입하기</h3>
      <p class="market--contents">{{ storageArr[0].price | numberWithCommaDollar }} 부터</p>
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
        <div class="storage" :class="{ 'selected': item.storage === selectStorage.storage }" v-for="(item, index) in storageArr" :key="`storage_${index}`" @click="choiceStorage(item)">
          <p class="storageName">{{ item.storage }}</p>
          <p class="price">{{ item.price | numberWithCommaDollar }}</p>
        </div>
      </div>
      <p class="text-bold">LouisCare+ 를 신청하시겠습니까?</p>
      <small>하드웨어 및 소프트웨어 보증 기간을 연장하고, iPhone을 가장 잘 아는 'Louis'로부터 우선적인 지원을 받을 수 있습니다.</small>
      <div class="care_wrap">
        <div class="care" :class="{ 'selected': item.care === selectCare.care }" v-for="(item, index) in careArr" :key="`storage_${index}`" @click="choiceCare(item)">
          <p class="careName">{{ item.care }}</p>
          <p class="careContent">{{ item.content }}</p>
          <p class="price">{{ item.price | numberWithCommaDollar }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MixinSection1 from './MixinSection1'

export default {
  name: 'Section1',
  mixins: [MixinSection1]
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

.img_wrap {
  padding: 3rem;
}
.img--back {
  width: 100%;
  height: 460px;
  background-image: url('../../../../../assets/img/iphone/market/market_background_img.png');
  background-size: 1250px;
  background-repeat: no-repeat;
  &.red {
    background-position: 0 -35px;
  }
  &.white {
    background-position: -410px -43px;
  }
  &.black {
    background-position: 0 -645px;
  }
  &.green {
    background-position: -410px -648px;
  }
  &.yellow {
    background-position: -820px -40px;
  }
  &.purple {
    background-position: -820px -643px;
  }
}

.right_wrap {
  width: 50%;
  padding: 1rem 1.5rem;
  float: right;
  max-height: 44.5rem;
  overflow-y: scroll;
}

.color_wrap, .storage_wrap, .care_wrap {
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  border-bottom: 1px dashed darkgrey;
}

.color_wrap, .storage_wrap {
  width: 100%;
}
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

.care {
  display: inline-block;
  text-align: center;
  cursor: pointer;
  width: 100%;
  padding: 4% 0;
  border: 1px solid darkgrey;
  border-radius: .3rem;
  margin: .5rem 0;

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

.careName {
  font-size: 1.5rem;
}

.price {
  font-size: 1.1rem;
  color: gray;
}

.careContent {
  font-size: 1.25rem;
  color: darkgray;
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

.pay_wrap {
  width: 90%;
  margin: 0 auto;
  border-radius: .5rem;
  background-color: #fafafa;
}

.totalPrice_wrap {
  padding: 1rem 5rem;
  text-align: right;
  line-height: 1.5;
}

.totalPrice {
  font-size: 1.5rem;
  font-weight: 700;
}
</style>>
