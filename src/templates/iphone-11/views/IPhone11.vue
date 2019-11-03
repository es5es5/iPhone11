<template>
  <div id="iphone11">
    <Top class="top"></Top>
    <Header class="header"></Header>
    <main>
      <Section1></Section1>
      <Section3></Section3>
    </main>
  </div>
</template>

<script>
import Top from '../components/Top'
import Header from '../components/Header'
import Section1 from './sections/Section1'
import Section3 from './sections/Section3'

export default {
  name: 'IPhone11',
  components: {
    Top,
    Header,
    Section1,
    Section3
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
    max-width: 980px;
    margin: 0 auto;
  }
}
</style>
