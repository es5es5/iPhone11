<template>
  <div class="section1_mobile">
    <div class="img_wrap">
      <div class="img--back" :class="selectColor"></div>
    </div>

    <p class="guide text-bold">마음에 쏙 드는 색상을 선택하세요.</p>
    <div class="color_wrap">
      <ul class="radio--sideColor_container">
        <li class="radio--sideColor_wrap" v-for="(item, index) in colorArr" :key="index">
          <input type="radio" name="sideColor" :id="`sideColor_${item.id}`" class="radio--sideColor checkbox" :value="item.id" v-model="selectColor">
          <label :for="`sideColor_${item.id}`" class="label--sideColor">{{ item.name }}</label>
        </li>
      </ul>
    </div>

    <p class="guide text-bold">충분한 용량을 선택하세요.</p>
    <div class="storage_wrap">
      <ul class="radio--storage_container">
        <li class="radio--storage_wrap" v-for="(item, index) in storageArr" :key="index">
          <input type="radio" name="storage" :id="`storage_${item.storage}`" class="radio--storage checkbox" :value="item.price" v-model="selectStorage.price">
          <label :for="`storage_${item.storage}`" class="label--storage">{{ item.storage }}</label>
        </li>
      </ul>
    </div>

    <p class="guide text-bold">LouisCare+ 를 신청하시겠습니까?</p>
    <p class="guide">하드웨어 및 소프트웨어 보증 기간을 연장하고, iPhone을 가장 잘 아는 'Louis'로부터 우선적인 지원을 받을 수 있습니다.</p>
    <div class="care_wrap">
      <ul class="radio--care_container">
        <li class="radio--care_wrap" v-for="(item, index) in careArr" :key="index">
          <input type="radio" name="care" :id="`care_${item.care}`" class="radio--care checkbox" :value="item.price" v-model="selectCare.price">
          <label :for="`care_${item.care}`" class="label--care">{{ item.care }}</label>
        </li>
      </ul>
    </div>

    <div class="pay_wrap">
      <h3 class="totalPrice">총 가격: {{ totalPrice | numberWithCommaDollar }}</h3>
      <p>( {{ totalPrice_KRW | numberWithCommaWon }} )</p>
      <p>( {{ totalPrice_JPY | numberWithCommaYen }} )</p>
    </div>
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

.img--market {
  width: 100%;
  height: 100%;
}

.img_wrap { padding: 3rem 0; }

.img--back {
  margin: 0 auto;
  width: 390px;
  height: 460px;

  background-image: url('../../../../../assets/img/iphone/market/market_background_img.png');
  background-size: 1250px;
  background-repeat: no-repeat;

  &.red { background-position: 0 -35px; }
  &.white { background-position: -410px -44px; }
  &.black { background-position: 0 -645px; }
  &.green { background-position: -410px -648px; }
  &.yellow { background-position: -820px -40px; }
  &.purple { background-position: -820px -644px; }
}

.guide { text-align: center; }

.color_wrap, .storage_wrap, .care_wrap {
  padding: 2rem 0;
  margin-bottom: 2rem;

  text-align: center;

  .radio--care_wrap {
    display: inline;
    margin: 0 1rem;
  }

  .radio--sideColor_container, .radio--storage_container {
    .radio--sideColor_wrap, .radio--storage_wrap {
      position: relative;
      display: inline-block;

      padding: 1rem 2rem;

      .label--sideColor, .label--storage {
        position: absolute;
        bottom: 3rem;
        left: 1.5rem;
        font-weight: 600;
        font-size: 1.2rem;
      }
    }
  }
}

.pay_wrap {
  width: 100%;
  padding: 1rem 3rem;

  text-align: right;
}

.totalPrice {
  font-size: 2rem;
  font-weight: 700;
}
</style>
