<template>
  <div class="iphone_market">
    <Section1 v-if="!isMobile"></Section1>
    <Section1Mobile v-else></Section1Mobile>
  </div>
</template>

<script>
import Section1 from './sections/Section1'
import Section1Mobile from './sections/Section1Mobile'

export default {
  components: {
    Section1,
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
