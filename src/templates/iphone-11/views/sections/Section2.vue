<template>
  <div id="section2">
    <div class="contents_wrap">
      <h2 class="section--title">첫눈에 반하다. 한 번, 두 번, 세 번, 네 번, 다섯 번, 여섯 번이나.</h2>
    </div>
    <div class="img--sideColor__wrap">
      <img :src="require(`@/assets/img/iphone/sideColor/${selectColor}.jpg`)" class="img--sideColor" :alt="`iphone11_side_color_${selectColor}`" :title="`iphone11_side_color_${selectColor}`">
    </div>
    <ul class="radio--sideColor_wrap">
      <li v-for="(item, index) in colorArr" :key="index">
        <input type="radio" name="sideColor" :id="`sideColor_${item}`" :value="item" v-model="selectColor">
        <label :for="`sideColor_${item}`">{{ item }}</label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Section2',
  data () {
    return {
      colorArr: [
        'black',
        'green',
        'red',
        'yellow'
      ],
      selectColor: 'red'
    }
  }
}
</script>

<style lang="scss" scoped>
.vod_wrap {
  font-size: 1.715rem;
  font-weight: 600;
}

.img--sideColor__wrap {
  text-align: right;

  .img--sideColor {
    width: 90%;
    height: 50%;
  }
}

</style>
