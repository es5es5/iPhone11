<template>
  <div id="iphone11">
    <Top class="top"></Top>
    <Header class="header"></Header>
    <main>
      <Section1></Section1>
    </main>
  </div>
</template>

<script>
import Top from '../components/Top'
import Header from '../components/Header'
import Section1 from './sections/Section1'

export default {
  name: 'IPhone11',
  components: {
    Top,
    Header,
    Section1
  }
}
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
}
.header {
  width: 100%;
  @media screen and (min-width: 1024px) {
    width: 1024px;
    margin: 0 auto;
  }
}
</style>
