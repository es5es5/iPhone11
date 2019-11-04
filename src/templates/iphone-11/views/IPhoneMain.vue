<template>
  <div id="iphone11">
    <main>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
    </main>
  </div>
</template>

<script>
import Section1 from './sections/Section1'
import Section2 from './sections/Section2'
import Section3 from './sections/Section3'

export default {
  name: 'IPhoneMain',
  components: {
    Section1,
    Section2,
    Section3
  }
}
</script>

<style lang="scss" scoped>
</style>
