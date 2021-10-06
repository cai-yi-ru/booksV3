<template>
  <div >
    <div class="mainNavbar fixed-top zindexTop w-100"
    :class="{ 'shadow-sm': scroll, 'bg-white': scroll }">
      <UserNavbar
      :class="{ 'shadow-sm': scroll, 'navbar-dark': !scroll ,'navbar-light': scroll }"></UserNavbar>
      </div>
      <!-- <div class="container-fluid mt-3 position-relative"> -->
      <div class="bgImg banner justify-content-between align-items-center">
          <div class="bannerSlogan d-flex flex-column align-items-center">
            <p class="typeAnime">你已經有多久沒有好好放鬆看一本書？!</p>
          </div>
      </div>

    <section class="content-section animated" id="portfolio">
            <div class="container px-4 px-lg-5 ">
                <div class="content-section-heading text-center">
                    <h3 class="text-secondary mb-0">TRAVEL</h3>
                    <h2 class="mb-5">熱門夯景點</h2>
                </div>
                <div class="row gx-0">
                    <div class="col-lg-6">
                        <a class="portfolio-item" href="#!"
                        @click.prevent="$router.push(
                          { name: 'products', params: { category: '台灣' }})">
                            <div class="caption">
                                <div class="caption-content">
                                    <div class="h2">台灣</div>
                                </div>
                            </div>
                            <img class="img-fluid"
                            src="https://images.unsplash.com/photo-1556115908-233c785befbe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="..." />
                        </a>
                    </div>
                    <div class="col-lg-6">
                        <a class="portfolio-item" href="#!"
                        @click.prevent="$router.push(
                          { name: 'products', params: { category: '日本' }})">
                            <div class="caption">
                                <div class="caption-content">
                                    <div class="h2">日本</div>
                                </div>
                            </div>
                            <img class="img-fluid"
                            src="https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="..." />
                        </a>
                    </div>
                    <div class="col-lg-6">
                        <a class="portfolio-item" href="#"
                        @click.prevent="$router.push(
                          { name: 'products', params: { category: '韓國' }})">
                            <div class="caption">
                                <div class="caption-content">
                                    <div class="h2">韓國</div>
                                </div>
                            </div>
                            <img class="img-fluid"
                            src="https://images.unsplash.com/photo-1517154421773-0529f29ea451?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="..." />
                        </a>
                    </div>
                    <div class="col-lg-6">
                        <a class="portfolio-item" href="#!"
                        @click.prevent="$router.push(
                          { name: 'products', params: { category: '中國' }})">
                            <div class="caption">
                                <div class="caption-content">
                                    <div class="h2">中國</div>
                                </div>
                            </div>
                            <img class="img-fluid"
                            src="https://images.unsplash.com/photo-1508804052814-cd3ba865a116?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="..." />
                        </a>
                    </div>
                </div>
            </div>
        </section>





      <section id="introdiction"
      class="introdiction text-center container
      position-relative d-flex flex-column justify-content-around">
    <div class="row mb-4 mt-4 animatedY">
      <div class="col-md-5">
        <div class="h2 m-3 p-3 fw-bolder">關於本站</div>
        <div class="h6 lh-lg m-auto p-4">
          我們提供你各種<br />
          顏值高又強大的怪獸卡<br />
          實用度高的輔助魔法卡<br />
          干擾度稱一流的陷阱卡<br />
          盡情地選購你想要的牌<br />
          成為一流的決鬥者!
        </div>
      </div>
      <div class="col-md-7">
        <div class="aboutUs w-100"></div>
      </div>
    </div>
    <div class="row mb-4 mt-4 animatedY ">
      <div class="col-md-8">
        <div class="doYouKnow w-100"></div>
      </div>
      <div class="col-md-4 mb-4">
        <div class="h2 text-decoration-underline m-3 p-3 fw-bolder">你知道嗎</div>
        <div class="h6 lh-lg text-start m-auto p-4 mb-auto">
          遊戲王卡牌遊戲於1999年時在日本推出，
          之後普及至亞洲、歐洲、美洲、澳洲等地，
          從2003年開始每年皆舉辦世界大賽。
          在2009年7月7日時獲得金氏世界紀錄大全認證為全世界最暢銷的交換卡片遊戲!
        </div>
      </div>
    </div>
    <div style="position: absolute; bottom: 0%; right: 20px; opacity: 0.5;">
      <a href="#cardType">
        <i class="bi bi-caret-down-square-fill text-white"
        style="font-size: 50px;"></i></a>
    </div>
  </section>
      <div>
      </div>
      <ToastMessages></ToastMessages>
      <router-view/>
    <!-- </div> -->
  </div>
</template>


<style>
.mainNavbar{
  transition-duration: 1s;
}
/* .banner{
  background-image: url(https://images.unsplash.com/photo-1502726488490-f99c74217a37?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80);
  @media (min-width: 992px){
    background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/yiren/1625800945548.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=mr%2Fd%2BiweQ6mYWz1FTHZihntrqXkiVkhz4BiG28WPx1PdZ2vwrONGg8qxa1cuRZ%2BUcHYP6gYV9jSCanZWT9gjwinkpMutbuyyQtgd3ftrvi70e3NGql%2BRJYwlm4UFyw5CAb8Z2npu38LhAqwBB1kYMcxeROFKmoZn09P%2FRRcqVsxrtlIGFBxoxM27RsksdmwsOY6Y2qugklqfwZf2kzYlAKrt1TTh450fr9sI4EwoxrDVstL94guZH%2BROsliMNlNtjPRZ5dyGiTXdQ18ROkWyWUlPqqVwDq2lwe2dZ1wEbQYlj%2Fp560PhmdX72TOr2Xgr46jkX0zvaK0k6rWDZ98Rww%3D%3D);
  }
} */
.img{
  object-fit: cover;
}
.bgImg{
  display: flex;
  flex-direction: column;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
}
.bgCover{
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,.1);
  position: absolute;
}

</style>


<script>
import $ from 'jquery';
import emitter from '@/methods/emitter';
import ToastMessages from '@/components/ToastMessages.vue';
import UserNavbar from '../components/user/UserNavbar.vue';


export default {
  components: {
    UserNavbar,
    ToastMessages,
  },
  data() {
    return {
      scroll: '',
    };
  },
  provide() {
    return {
      emitter,
    };
  },
  mounted() {
    window.addEventListener('scroll', () => {
      this.scroll = document.documentElement.scrollTop > 0;
      console.log(this.scroll);
    });
  },
  unmounted() {
    window.removeEventListener('scroll', () => {
      this.scroll = document.documentElement.scrollTop > 0;
    });
  },
  created() {
    $(document).ready(() => {
      $(window).scroll(() => {
        const scrollPos = $(window).scrollTop();
        const windowHeight = $(window).height();
        $('.animated').each(function () {
          const thisPos = $(this).offset().top;
          if (windowHeight * 0.8 + scrollPos >= thisPos) {
            $(this).addClass('fadeIn');
          } else {
            $(this).removeClass('fadeIn');
          }
        });
        $('.animatedY').each(function () {
          const thisPos = $(this).offset().top;
          if (windowHeight * 0.8 + scrollPos >= thisPos) {
            $(this).addClass('fadeInY');
          } else {
            $(this).removeClass('fadeInY');
          }
        });
      });
    });
  },
};
</script>
