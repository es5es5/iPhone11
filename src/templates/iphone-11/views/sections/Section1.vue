<template>
  <div id="section1">
    <img class="iphone_main" src="@/assets/img/iphone/main.jpg" alt="iPhone 11 [MAIN Image] Here." title="iphone11">
    <div class="contents_wrap">
      <h2 class="section--title">더할 나위 없이<br>완벽한 조화.</h2>
      <p class="section--contents">새로운 듀얼 카메라 시스템은 소중한 순간들을 더욱 넓은 장면으로 포착할 수 있게 해줍니다. 스마트폰 사상 가장 빠른 칩과 온종일 가는 배터리 덕분에 충전을 자주 안 해도 더욱 많은 일들을 해낼 수 있죠. 여기에 스마트폰 사상 최고 퀄리티의 동영상을 찍을 수 있기 때문에, 당신의 추억들을 그 어느 때보다 선명하고 아름답게 기록할 수 있습니다.</p>
      <p class="rewardSales">보상 판매 시 ₩695,600부터.*</p>
      <div class="vod_wrap">
        <a class="link">키노트 시청하기</a>
        <a class="link">동영상 보기</a>
      </div>
    </div>
    <div class="contents_wrap">
      <div class="slide_warp">
        <h2 class="section--title">첫눈에 반하다. 한 번, 두 번, 세 번, 네 번, 다섯 번, 여섯 번이나.</h2>
        <img src="" alt="iPhone 11 [CHOOSE THE COLOR Image] Here." title="iphone11_side">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Section1'
}
</script>

<style lang="scss" scoped>
#section1 {
  text-align: center;
  @media (max-width: 735px) {
    text-align: left;
  }
}
.iphone_main {
  display: block;
  width: 50%;
  height: 50%;
  margin: 0 auto;
}
.contents_wrap {
  width: 60%;
  margin: 10rem auto;
  @media (max-width: 735px) {
    width: 90%;
  }

  .rewardSales {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: .011rem;
  }
}
.vod_wrap {
  font-size: 1.715rem;
  font-weight: 600;

}

</style>
