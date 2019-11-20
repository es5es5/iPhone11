<template>
  <div id="iphone11">
    <Top class="top"></Top>
    <Header class="header"></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Top from '../components/Top'
import Header from '../components/Header'

export default {
  name: 'IPhone11',
  components: {
    Top,
    Header
  }
}
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
}
</style>
