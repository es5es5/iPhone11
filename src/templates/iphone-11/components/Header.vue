<template>
  <nav id="header">
    <div class="header_wrap">
      <h2 class="title" @click="goMainLayout">iPhone 11</h2>
      <ul class="link_wrap">
        <li class="outline">
          <P>개요</P>
        </li>
        <li class="spec">
          <p>제품 사양</p>
        </li>
        <li class="price" @click="goMarketLayout">
          <p>구입하기</p>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  created () {
  },
  methods: {
    goMainLayout () {
      this.$router.push({
        name: 'IPhoneMainLayout'
      })
    },
    goMarketLayout () {
      this.$router.push({
        name: 'IPhoneMarketLayout'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.header_wrap {
  margin: 0 auto;
  max-width: 980px;
  height: 3.15rem;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 980px) {
    padding: 0 1rem;
  }
}

.title {
  display: inline-block;
  font-size: 1.4rem;
  line-height: 2.2;
  font-weight: bold;
  cursor: pointer;
}

.link_wrap {
    display: flex;
    font-size: 0.8rem;
    font-weight: 600;
    li {
      margin-left: 1.4285714rem;
      padding: 0 0.14285rem;
      color: #4f4f50;
      p{
        cursor: pointer;
        margin-top: 1.071428rem;
      }
    }

    .price p{
      background-color: #147ce5;
      padding: 0.28571rem 0.785714rem;
      margin-top: 0.785714rem;
      border-radius: 0.857142rem;
      color: #ffffff;
  }
}

</style>
