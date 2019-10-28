<template>
  <div :id="`buttonId`" class="btn_wrap">
    <button type="button" :class="[_color, _type]">{{ _buttonName }}</button>
  </div>
</template>

<script>
export default {
  name: 'BtnNormal',
  props: {
    buttonName: {
      type: String,
      required: true,
      default: () => ''
    },
    type: {
      type: String,
      required: false,
      default: () => ''
    },
    color: {
      type: String,
      required: false,
      default: () => ''
    }
  },
  computed: {
    _buttonName () {
      return this.buttonName
    },
    _type () {
      return this.type
    },
    _color () {
      return this.color
    }
  }
}
</script>

<style lang="scss" scoped>
.btn_wrap {
  padding: 10px;
  color: #ffffff;
}
.red {
  background-color: red;
}
.blue {
  background-color: blue;
}
.normal {
  // background-color: #147ce5;
  padding: 0.28571rem 0.785714rem;
  margin-top: 0.785714rem;
  border-radius: 0.857142rem;
}
</style>
