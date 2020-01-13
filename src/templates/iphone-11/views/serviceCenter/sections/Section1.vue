<template>
    <div class = "section1 clearfix">
        <div class = "img_wrap">
                <!-- <img alt = "배경이미지 입니다." class="wrap_background_img" src="@/assets/img/iphone/service/hero-banner-homepage.image.large_2x.jpg"> -->
            <div class = "wrap_innerContent">
                <p class = "title">Apple 지원에 오신것을 환영합니다</p>
                <div class = "searchBox">
                    <input v-model="message" placeholder="무엇이 궁금한가요?" autocomplete="none" type="text">
                    <img alt = "검색" class="btn_search_img" src="@/assets/img/iphone/service/search_icon_black.png">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
    .wrap_background_img{
        width: 100vw;
    }

    .img_wrap{
        background-image: url(/img/hero-banner-homepage.image.large_2x.c0a8ccea.jpg);
        width: 100vw;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        @media (min-width: 951px){
            height: 540px;
        }
        @media (max-width : 950px) and (min-width : 736px){
            height: 450px;
        }
        @media (max-width : 735px){
            height: 320px;
        }
    }

    .wrap_innerContent{
        width: max-content;
        margin: 0 auto;
        position: relative;
        top: 14%;
        .title{
            font-size: 3rem;
            font-weight: 500;
            margin: 0 2.14285rem;
        }
        .searchBox{
            height: 50px;
            margin: 1.42857rem 0 0 0;
            .btn_search_img{
                height: 23px;
                position: relative;
                bottom: 70%;
                left: 2%;
            }
            input[type='text']{
                position: relative;
                left: 0;
                bottom: 0;
                height: 100%;
                padding: 4px 7% 0;
                font-size: 17px;
                font-weight: 600;
                width: 100%;
                border: 0.10714rem solid #cccccc;
                outline: none;
            }
        }
    }
</style>
