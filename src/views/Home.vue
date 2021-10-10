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
            <p class="typeAnime">書本是最美的風景，知識是最美的名片</p>
          </div>
      </div>
      <section>
        <div
          class="bg-cover bg-md-fixed position-relative"
          style="height: 420px;"
        >
          <div class="index-mask text-dark d-flex align-items-center justify-content-center">
            <div class="d-flex flex-column align-items-center justify-content-center">
              <h3 class="h1 px-1 mb-4">歡慶開幕</h3>
              <p class="text-center text-md-start mb-5 mb-md-8 px-5">
                即日起至 2022-12-31，<br class="d-md-none">
                消費不限金額，通通都享 <strong class="fs-5">88%</strong> 折扣
              </p>
              <div class="discount-code coupon position-relative"
              @click="copyCode()">
                <i class="bi bi-scissors"></i>
                <p class="text-white myCoupon"
                  value="open88"
                  > open88</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    <!-- <section class="content-section animated" id="portfolio">
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
        </section> -->


  <section class="mt-5 animatedY">
  <div class="container mb-4 mb-md-7" data-aos="fade-up">
    <div class="d-md-flex align-items-md-center">
      <h3 class="d-flex align-items-center h3 text-orange">
        限時
      </h3>
      <p class="fontSize-md-S text-danger ms-2 mb-0">數量有限，機會錯過不再</p>
    </div>
    <Swiper
    :slidesPerView="2"
    :spaceBetween="10"
    :breakpoints='{
      "@0.00": {
        "slidesPerView": 2,
        "spaceBetween": 10
      },
      "@0.75": {
        "slidesPerView": 3,
        "spaceBetween": 20
      },
      "@1.00": {
        "slidesPerView": 3,
        "spaceBetween": 25
      },
      "@1.50": {
        "slidesPerView": 4,
        "spaceBetween": 25
      }
    }'
    :freeMode="true"
    :loop="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    class="mySwiper mb-4 mb-md-7"
  >
          <Swiper-slide v-for="item in selfproducts" :key="item.id">
      <div class="card h-100 border-0 box-shadow">
                    <div style="height: 200px; background-size: contain;
                    background-position: center;background-repeat:no-repeat;"
                    class="w-100 position-relative"
                    :style="{backgroundImage:`url(${item.imageUrl})`}"
                    type="button" @click.prevent="getProduct(item.id)">
                    </div>
                    <span class="badge bg-danger position-absolute top-0 end-0 p-2
                    zindex-fixed h6 align-items-center"
                  v-if="item.is_onSale"><i class="bi bi-alarm"></i>
                  <strong class="h6">限時特賣</strong></span>
                <div class="card-body" type="button" @click.prevent="getProduct(item.id)">
                  <!-- <span class="badge bg-secondary float-end ml-2">
                    {{ item.category }}</span> -->
                  <h5 class="card-title h6 webkit-line-clamp">{{item.title}}</h5>
                  <p class="card-text">
                  </p>
                  <div class="d-flex justify-content-between align-items-baseline">
                    <span class="text-danger">{{parseInt(item.price/item.origin_price*100)}}折
                    </span>
                    <div class="h6" v-if="!item.price">{{ item.origin_price }} 元</div>
                    <!-- <del class="h6" v-if="item.price">原價 {{ item.origin_price }} 元</del> -->
                    <div class="h6" v-if="item.price"><strong>優惠價
                      <span class=" h6 text-danger">{{ item.price }}</span> 元
                      </strong></div>
                  </div>
                </div>
              </div>
    </Swiper-slide>
  </Swiper>
  </div>
    </section>

  <section class="mt-5 animatedY">
  <div class="container mb-4 mb-md-7" data-aos="fade-up">
    <div class="d-md-flex align-items-md-center">
      <h3 class="d-flex align-items-center h3 text-orange">
        暢銷熱賣
      </h3>
    </div>
    <Swiper
    :slidesPerView="2"
    :spaceBetween="10"
    :breakpoints='{
      "@0.00": {
        "slidesPerView": 2,
        "spaceBetween": 10
      },
      "@0.75": {
        "slidesPerView": 3,
        "spaceBetween": 20
      },
      "@1.00": {
        "slidesPerView": 3,
        "spaceBetween": 25
      },
      "@1.50": {
        "slidesPerView": 4,
        "spaceBetween": 25
      }
    }'
    :freeMode="true"
    :loop="true"
    :autoplay="{
      delay: 4000,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    class="mySwiper mb-4 mb-md-7"
  >
          <Swiper-slide v-for="item in recommendproducts" :key="item.id">
      <div class="card h-100 border-0 box-shadow">
                    <div style="height: 200px; background-size: contain;
                    background-position: center;background-repeat:no-repeat;"
                    class="w-100 position-relative"
                    :style="{backgroundImage:`url(${item.imageUrl})`}"
                    type="button" @click.prevent="getProduct(item.id)">
                    </div>
                    <span class="badge bg-danger position-absolute top-0 end-0 p-2 zindex-fixed h6"
                  v-if=" item.sell_num >=300 "><i class="bi bi-hand-thumbs-up"></i>
                  <strong class="h6">大力推薦</strong></span>
                <div class="card-body" type="button" @click.prevent="getProduct(item.id)">
                  <!-- <span class="badge bg-secondary float-end ml-2">
                    {{ item.category }}</span> -->
                  <h5 class="card-title h6 webkit-line-clamp">{{item.title}}</h5>
                  <p class="card-text">
                  </p>
                  <div class="d-flex justify-content-between align-items-baseline">
                    <span class="text-danger">{{parseInt(item.price/item.origin_price*100)}}折
                    </span>
                    <div class="h6" v-if="!item.price">{{ item.origin_price }} 元</div>
                    <!-- <del class="h6" v-if="item.price">原價 {{ item.origin_price }} 元</del> -->
                    <div class="h6" v-if="item.price"><strong>優惠價
                      <span class=" h6 text-danger">{{ item.price }}</span> 元
                      </strong></div>
                  </div>
                </div>
              </div>
    </Swiper-slide>
  </Swiper>
  </div>
    </section>

      <!-- <section id="introdiction"
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
  </section> -->


  <Subscribe></Subscribe>
      <div>
      </div>
      <ToastMessages></ToastMessages>
      <router-view/>
    <!-- </div> -->
  <div>
    <UserFooter></UserFooter>
  </div>
  </div>
</template>


<style>
.webkit-line-clamp{
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 2.4em;
}
.coupon {
  position: absolute;
  width: 400px;
  height: 160px;
  margin: auto;
  background-image: radial-gradient( circle at 1px 8px,
  transparent 6px, #ff9e6d 6px, #ff9e6d 0px),
  radial-gradient( circle at 199px 8px,
  transparent 6px, #ff9e6d 6px, #ff9e6d 0px);
  background-size: 200px 18px;
  background-position: 0 0, 200px 0;
  background-repeat: no-repeat repeat;
  font-size: 36px;
  color: #fff;
  font-weight: bold;
  line-height: 160px;
  padding-left: 40px;
  box-sizing: border-box;
  cursor: pointer;
}
.coupon::before {
  position: absolute;
  content: "";
  left: 240px;
  top: 0;
  bottom:0;
  width: 0;
  border-left: 1px dashed #fff;
}
.coupon::after {
  position: absolute;
  content: "立即領取";
  font-size: 26px;
  width: 70px;
  top: 50%;
  right: 2%;
  transform:
  translate(-50%, -50%);
  line-height: 40px;
  letter-spacing: 5px;
}




.index-mask {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(204, 224, 222, .4);
}
.index-mask h3 {
    background: linear-gradient(transparent 60%, pink 40%);
  }
.discount-code {
  min-width: 250px;
  background-color: rgba(255, 255, 255, .2);
  border: 2px white;
  transition: .3s;
}
.discount-code input, i {
  cursor: pointer;
}
.discount-code i {
  position: absolute;
  color: #000;
  top: -100px;
  right: -30px;
  transform: rotate(135deg);
  animation: scissorCut .7s infinite;
}
.discount-code:hover {
    background-color: transparent;
  }

@keyframes scissorCut {
  0% {
    transform: rotate(145deg);
  }
  50% {
    transform: rotate(135deg);
  }
  100% {
    transform: rotate(145deg);
  }
}




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
import UserFooter from '@/components/user/UserFooter.vue';
import Subscribe from '@/components/user/Subscribe.vue';

export default {
  components: {
    UserNavbar,
    ToastMessages,
    UserFooter,
    Subscribe,
  },
  data() {
    return {
      scroll: '',
      isLoading: false,
      products: [],
      selfproducts: [],
      recommendproducts: [],
      autoplay: {
        delay: 3000,
      },
    };
  },
  provide() {
    return {
      emitter,
    };
  },
  methods: {
    getProducts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          console.log(res);
          this.products = res.data.products;
          // this.selfproducts = this.products.filter((item) => item.is_onSale.match(true));
          this.products.filter((item) => {
            if (item.is_onSale) {
              this.selfproducts.push(item);
            }
            return this.selfproducts;
          });
          this.products.filter((item) => {
            if (item.sell_num >= 300) {
              this.recommendproducts.push(item);
            }
            return this.recommendproducts;
          });
          this.pagination = res.data.pagination;
        }
      });
    },
    copyCode() {
      const range = document.createRange();
      // 將指定元素內容加到 Range 中
      const texts = document.querySelector('.myCoupon');
      range.selectNode(texts);
      // 取得 Selection 物件
      const selection = window.getSelection();
      // 先清空當前選取範圍
      selection.removeAllRanges();
      // 加入 Range
      selection.addRange(range);
      document.execCommand('copy');
      selection.removeAllRanges();
    },
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
    this.getProducts();
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
