<template>
  <div id="home">
    <div class="welcome_wrap">
      <h1>Hello! Welcome to My Page.</h1>
      <p>This is just a copy for Study.</p>
      <br>
      <router-link tag="a" class="link" :to="{ name: 'IPhone11' }">iPhone11.</router-link>
      <router-link tag="a" class="link" :to="{ name: 'IPhoneMarketLayout' }">iPhone11 Market.</router-link>
    </div>
    <footer class="about_wrap">
      <a href="https://github.com/es5es5/resume/blob/master/RESUME.md" target="_blank" rel="noopener noreferrer">About Me.</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
.welcome_wrap {
  font-size: 1.5rem;
  margin: 5% 0;
  text-align: center;
  line-height: 1.75;
}
.about_wrap {
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  width: 80%;
  margin: 0 auto;
  padding: 5% 0;
  text-align: center;
  border-top: 1px dashed #777;
}
a {
  display: block;
  &:hover {
    text-decoration: underline;
    transform: translate(0, -.5rem);
    transition: all .75s;
  }
}
</style>
