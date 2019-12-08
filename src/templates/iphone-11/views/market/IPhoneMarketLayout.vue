<template>
  <div class="iphone_market_layout">
    <template v-if="!isMobile">
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
    </template>
    <template v-else>
      <Section1Mobile></Section1Mobile>
    </template>
  </div>
</template>

<script>
// Web
import Section1 from './sections/Section1'
import Section2 from './sections/Section2'
import Section3 from './sections/Section3'

// Mobile
import Section1Mobile from './sections/Section1Mobile'

export default {
  components: {
    // Web
    Section1,
    Section2,
    Section3,
    // Mobile
    Section1Mobile
  },
  data () {
    return {
      isMobile: false,
      deviceSize: 0
    }
  },
  created () {
    this.windowResizingEventListen()
  },
  beforeMount () {
    this.checkWindowSize()
  },
  methods: {
    checkWindowSize () {
      if (window.innerWidth < 950) {
        this.isMobile = true
      } else {
        this.isMobile = false
      }
    },
    windowResizingEventListen () {
      window.addEventListener('resize', () => {
        this.deviceSize = window.innerWidth
        if (this.deviceSize < 950) {
          this.isMobile = true
        } else {
          this.isMobile = false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
