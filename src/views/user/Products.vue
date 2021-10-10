<template>
  <Loading :active="isLoading"></Loading>
  <div>
    <div class="container my-5">
      <div class="row">
        <div class="input-group mb-4">
          <input type="text" class="form-control" placeholder="請輸入"
          aria-label="請輸入" aria-describedby="button-addon2" v-model="this.serch">
          <button class="btn btn-outline-secondary" type="button" id="button-addon2">搜尋</button>
        </div>
        <div class="col-md-2 me-auto mb-5">
            <div class="list-group text-center sticky-top" style="top: 40px;">
              <button type="button" class="list-group-item list-group-item-action border-0 py-4"
              :class="{ 'active':category==='All'}"
              aria-current="true"
              @click.prevent="category = 'All'">
                全部
              </button>
              <button type="button"
              class="list-group-item list-group-item-action border-0 py-3"
              v-for="(item, index) in filterCategory" :key="index"
              :class="{'active':category===item}"
              @click.prevent="category = item">{{item}}</button>
            </div>
        </div>
        <div class="col-md-10">
          <div class="row row-cols-2 row-cols-md-4 g-4 mb-2">
            <div  class="col" v-for="item in filterProducts"
            :key="item.id">
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
                <div class="card-footer border-top-0 bg-white d-flex mb-2 mx-2">

                  <!-- <button type="button" class="btn btn-outline-secondary btn-sm"
                  @click.prevent="getProduct(item.id)">
                    <i class="fas fa-spinner fa-spin"></i>
                    查看更多
                  </button> -->
                  <button type="button" class="btn btn-outline-danger btn-sm m-auto"
                  @click="addCart(item.id)" :disabled="this.status.loadingItem === item.id">
                    <div v-if="this.status.loadingItem === item.id"
                    class="spinner-border spinner-border-sm" role="status">
                    </div>
                    加到購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="card mb-3 box-shadow" style="max-width: 100%;"
          v-for="item in filterProducts" :key="item.id">
          <a type="button" @click.prevent="getProduct(item.id)">
            <div class="row g-0">
              <div class="col-md-4">
                <div style="height: 300px; background-size: 100% 100%;
                  background-position: center" class="w-100 pic"
                  :style="{backgroundImage:`url(${item.imageUrl})`}">
                </div>
                <div class="pic position-relative h4 mb-n1">
                  <img :src="item.imageUrl" class="h-100 w-100 img-fluid ">
                  <span class="badge bg-danger position-absolute top-0 end-0 p-2 zindex-fixed"
                  v-if=" item.sell_num >=800 "><i class="bi bi-hand-thumbs-up"></i>
                  <strong class="">大力推薦</strong></span>
                  <span class="badge bg-danger position-absolute top-0 end-0 p-2 zindex-fixed"
                  v-else-if="item.sell_num >=100 && item.sell_num<800">
                    <i class="bi bi-hand-thumbs-up"></i>
                  <strong class="">推薦</strong></span>
                </div>
              </div>
              <div class="col-md-8 position-relative" style="position: relative;">
                <div class="card-body mb-5 ">
                  <div>
                    <p class="h5">
                      <span class="badge rounded-pill bg-info text-dark
                      float-end ml-2 position-absolute top-10">{{ item.category }}</span>
                    </p>
                    <h5 class="card-title">{{item.title}}</h5>
                    <p class="card-text" v-html="item.description.replace(/\n/g, '<br>')"></p>
                  </div>
                </div>
                <div class="card-footer border-top-0 bg-white">
                  <div class="row align-items-end justify-content-center">
                    <div class="col-md-4 align-self-end">
                      <div>
                        <i class="bi bi-star-fill text-warning mb-3"
                        v-for="num in item.star" :key="num"></i>
                        <p>已經有 {{item.sell_num}} 人出發去旅行</p>
                      </div>
                    </div>
                    <div class="col-md-8 text-end">
                      <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div>
                      <del class="h6" v-if="item.price">原價 {{ item.origin_price }} 元</del>
                      <div class="h5" v-if="item.price"><strong>現在只要
                        <span class="text-danger">{{ item.price }}</span> 元/人
                        </strong></div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
          </div> -->
        <div class="mt-5">
          <!-- <Pagination :pages="pagination"
          @emit-pages="getProducts"
          v-if="category ==='All'"></Pagination> -->
        </div>
        </div>
      </div>
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
.box-shadow {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.16);
  transition: box-shadow 0.5s;
}
.box-shadow:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
}
.pic{
  height: 100%;
  overflow:hidden;
  }
.pic img{
  transform:scale(1,1);
  transition: all 0.5s ease-out;
  max-width: 100%;
}
.pic img:hover{
  transform:scale(1.2,1.2);
}
.absolute {
  position: absolute;
  bottom: 0;
}
</style>

<script>
import emitter from '@/methods/emitter';
// import Pagination from '../../components/Pagination.vue';

export default {
  data() {
    return {
      products: [],
      product: {},
      pagination: {},
      status: {
        loadingItem: '', // 對應品項ID
      },
      isLoading: false,
      category: 'All',
      categoryItem: [],
      tempProducts: [],
      serch: '',
    };
  },
  inject: ['emitter'],
  // components: {
  //   Pagination,
  // },
  methods: {
    getProducts() {
      // const api = `${process.env.VUE_APP_API}api/
      // ${process.env.VUE_APP_PATH}/products/?page=${page}`;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          console.log(res);
          this.products = res.data.products;
          // this.pagination = res.data.pagination;
        }
      });
    },
    getProduct(id) {
      // console.log(id);
      this.$router.push(`/product/${id}`);
    },
    addCart(id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty: 1,
      };
      this.$http.post(api, { data: cart }).then((res) => {
        // console.log('123', emitter.emit('update-cart'));
        if (res.data.success) {
          console.log(res);
          emitter.emit('update-cart');
          this.status.loadingItem = '';
          this.$httpMessageState(res, '加入購物車');
        }
      });
    },
  },
  computed: {
    // 篩選分類
    filterCategory() {
      const vm = this;
      vm.products.forEach((item) => {
        vm.categoryItem.push(item.category);
      });
      return vm.categoryItem.filter((item, index, arr) => {
        const arrResult = arr.indexOf(item) === index;
        return arrResult;
      });
    },
    // 篩選
    filterProducts() {
      let temdata = [];
      if (this.serch !== '') {
        temdata = this.products.filter((item) => item.title.match(this.serch));
      } else {
        if (this.category === 'All') {
          temdata = this.products;
        } else {
          temdata = this.products.filter((item) => item.category.match(this.category));
        }
        return temdata;
      }
      return temdata;
    },
  },
  created() {
    // console.log(this.$route.params.category);
    if (this.$route.params.category) {
      this.category = this.$route.params.category;
    }
    this.getProducts();
  },
};
</script>
