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
      this.$swal.fire({ icon: 'success', title: '已複製到剪貼簿' });
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
