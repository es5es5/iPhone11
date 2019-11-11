<template>
  <div class="iphone_market">
    <Section1></Section1>
  </div>
</template>

<script>
import Section1 from './sections/Section1'

export default {
  components: {
    Section1
  },
  created () {
    console.log('나 태어났어요.')
  },
  destroyed () {
    console.log('나 죽어요')
  }
}
</script>
