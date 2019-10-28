<template>
  <nav id="header">
    <div class="header_wrap">
      <h2 class="title">iPhone 11</h2>
      <ul class="link_wrap">
        <li class="outline">
          <P>개요</P>
        </li>
        <li class="spec">
          <p>제품 사양</p>
        </li>
        <li class="price">
          <p>구입하기</p>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header_wrap {
  height: 3.15rem;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  max-width: 980px;
}

.title {
  display: inline-block;
  font-size: 1.4em;
  line-height: 2.2;
  font-weight: bold;
  cursor: pointer;
}

.link_wrap {
    display: flex;
    font-size: 0.8em;
    font-weight: 600;
    li {
      margin-left: 20px;
      padding: 0 2px;
      color: #4f4f50;
      p{
        cursor: pointer;
        margin-top: 15px;
      }
    }

    .price p{
      background-color: #147ce5;
      padding: 4px 11px;
      margin-top: 11px;
      border-radius: 12px;
      color: #ffffff;
  }
}

</style>
