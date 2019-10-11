<template>
  <div id="iphone11">
    <Top></Top>
    <Header class="header"></Header>
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
.header {
  margin: 0 auto;
  width: 80%;
}
</style>
