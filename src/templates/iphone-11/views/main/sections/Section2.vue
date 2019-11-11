<template>
  <div id="section2">
    <div class="contents_wrap">
      <h2 class="section--title">첫눈에 반하다. 한 번, 두 번, 세 번, 네 번, 다섯 번, 여섯 번이나.</h2>
    </div>
    <div class="img--sideColor__wrap">
      <img :src="require(`@/assets/img/iphone/sideColor/${selectColor}.jpg`)" class="img--sideColor" :alt="`iphone11_side_color_${selectColor}`" :title="`iphone11_side_color_${selectColor}`">
    </div>
    <div class="action_wrap">
      <ul class="radio--sideColor_container">
        <li class="radio--sideColor_wrap" v-for="(item, index) in colorArr" :key="index">
          <input type="radio" name="sideColor" :id="`sideColor_${item.id}`" class="radio--sideColor" :value="item.id" v-model="selectColor">
          <label :for="`sideColor_${item.id}`" class="label--sideColor">{{ item.name }}</label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Section2',
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
.vod_wrap {
  font-size: 1.715rem;
  font-weight: 600;
}

.img--sideColor__wrap {
  text-align: right;

  .img--sideColor {
    width: 90%;
  }
}

.action_wrap {
  width: 80%;
  margin: 0 auto;

  .radio--sideColor_container {
    .radio--sideColor_wrap {
      position: relative;
      display: inline-block;
      padding: 1rem;

      .radio--sideColor {
        // go ahead.
      }
      .label--sideColor {
        position: absolute;
        bottom: 3rem;
        left: .5rem;
        font-weight: 600;
        font-size: 1.2rem;
      }
    }
  }
}

</style>
