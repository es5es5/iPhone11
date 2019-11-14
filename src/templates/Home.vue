<template>
  <div id="home">
    <div class="welcome_wrap">
      <h1>Hello! Welcome to My Page.</h1>
      <p>This is just a copy for Study.</p>
      <br>
      <router-link :to="{ name: 'IPhone11' }">go IPhone11</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.welcome_wrap {
  margin: 10%;
  text-align: center;
}
</style>
