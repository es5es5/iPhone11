<template>
    <div class = "section3">
        <div class = "section-header">
            <div class = "header-content">
                <p>동영상 제작 수준의 비약적 향상. 비결은 디테일의 차이</p>
            </div>
        </div>
        <div class = "section-motion">
            <video muted autoplay loop src = "@/assets/video/apple_motion_video.mp4" id = "motion-video"></video>
        </div>
        <div class = "section-scroll">
            <div class = "scroll-box">
                <button type = "button">
                    <div class = "scroll-box-content-1">
                        <p>자르기</p>
                    </div>
                </button>
                <button type = "button">
                    <div class = "scroll-box-content-1">
                        <p>기울이기</p>
                    </div>
                </button>
                <button type = "button">
                    <div class = "scroll-box-content-1">
                        <p>필터</p>
                    </div>
                </button>
            </div>
        </div>
        <div class = "section-body">
            <p class = "body-content-1 text--bold">
                스마트폰 사상 가장 뺴어난 퀄리티의 동영상 촬영 및 편집.
            </p>
            <p class = "body-content">
                iPhone 11에 탑재된 모든 카메라는 아름답고 선명한 초당 60 프레임의 4K 동영상을 촬영합니다. 4배나 더 넓은 장면을 포착하는 울트라 와이드 카메라는 원반을 잡으러 쏜살같이 달리는 강아지의 모습과 같은 역동적인 움직임을 촬영하기에 제격이죠. 피아노 연주회 무대에 오른 아이를 촬영 중인데 주변이 소란스러운가요? 걱정 마세요. 카메라를 줌인해서 아이를 가까이 찍으면 오디오도 같이 줌인되니까요. 게다가 이제는 동영상도 사진 다루듯 간편하게 편집할 수 있답니다.
            </p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Section3'
}
</script>

<style lang="scss" scoped>
    .header-content{
        position: absolute;
        width: 100%;
            p {
                color: #ffffff;
                font-size: 3.5rem;
                font-weight: 800;
                width: 780px;
                margin: 0 auto;
            }
    }

    .section-motion video {
        width: 100%;
    }

    .scroll-box{
        background-color: #f3f2f2;
        width: fit-content;
        margin: 0 auto;
        border-radius: 14px;
    }

    .section-scroll{
        text-align: center;
        margin: 20px 0;
        button{
            border: 0;
            padding: 5px 20px;
            background-color: rgba(0, 0, 0, 0);
            &:focus{
                background-color: black;
                border-radius: 14px;
                p{
                    color: #ffffff
                }
            }
        }
    }

</style>
