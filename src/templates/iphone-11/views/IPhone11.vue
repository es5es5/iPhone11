<template>
  <div id="iphone11">
    <Top></Top>
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
.header {
  margin: 0 auto;
  width: 80%;
}
</style>
