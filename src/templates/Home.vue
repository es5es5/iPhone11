<template>
  <div id="home">
    <div class="welcome_wrap">
      <h1>Hello! Welcome to My Page.</h1>
      <p>This is just a copy for Study.</p>
      <br>
      <router-link tag="a" class="link" :to="{ name: 'IPhone11' }">iPhone11.</router-link>
      <router-link tag="a" class="link" :to="{ name: 'IPhoneMarketLayout' }">iPhone11 Market.</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
.welcome_wrap {
  margin: 10%;
  text-align: center;
  line-height: 1.5;
}
a {
  display: block;
}
</style>
