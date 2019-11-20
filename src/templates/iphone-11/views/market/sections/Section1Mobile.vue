<template>
  <div class="section1_mobile">
    <div class="img_wrap">
      <div class="img--back" :class="selectColor"></div>
    </div>
    <div class="action_wrap">
      <ul class="radio--sideColor_container">
        <li class="radio--sideColor_wrap" v-for="(item, index) in colorArr" :key="index">
          <input type="radio" name="sideColor" :id="`sideColor_${item.id}`" class="radio--sideColor" :value="item.id" v-model="selectColor">
          <label :for="`sideColor_${item.id}`" class="label--sideColor">{{ item.name }}</label>
        </li>
      </ul>
    </div>
    <!-- <div class="right_wrap">
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
      <div class="pay_wrap">
        <div class="totalPrice_wrap">
          <h3 class="totalPrice">{{ totalPrice | numberWithCommaDollar }}</h3>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import MixinSection1 from './MixinSection1'

export default {
  name: 'Section1Mobile',
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

.section1_mobile {
  margin: 0 auto;
  max-width: 950px;
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
  padding: 3rem 0;
}
.img--back {
  margin: 0 auto;
  width: 390px;
  height: 460px;
  background-image: url('../../../../../assets/img/iphone/market/market_background_img.png');
  background-size: 1250px;
  background-repeat: no-repeat;
  &.red {
    background-position: 0 -35px;
  }
  &.white {
    background-position: -410px -44px;
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
    background-position: -820px -644px;
  }
}

.action_wrap {
  text-align: center;
  .radio--sideColor_container {
    .radio--sideColor_wrap {
      position: relative;
      display: inline-block;
      padding: 1rem 2rem;

      .radio--sideColor {
        // go ahead.
      }
      .label--sideColor {
        position: absolute;
        bottom: 3rem;
        left: 1.5rem;
        font-weight: 600;
        font-size: 1.2rem;
      }
    }
  }
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
  width: 100%;
  border-radius: .5rem;
  background-color: #fafafa;
}

.totalPrice {
  padding: 3rem;
}

.totalPrice {
  font-size: 2.25rem;
  font-weight: 700;
}
</style>>
