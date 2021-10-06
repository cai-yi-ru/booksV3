<template>
  <Loading :active="isLoading"></Loading>
  <div class="mt-5">
    <section>
      <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-transparent pl-0">
            <li class="breadcrumb-item"><a href="#">所有商品</a></li>
            <li class="breadcrumb-item">{{product.category}}</li>
            <li class="breadcrumb-item active" aria-current="page">{{product.title}}</li>
          </ol>
        </nav>
        <div class="row">
          <div class="col-md-4 mt-5">
            <div class="sticky-top BGcolor" style="top: 30px;">
              <h1 class="h2 ">{{product.title}}</h1>
              <img :src="product.imageUrl" class="w-100" alt="" />
              <div class="d-flex my-1">
                <i class="bi bi-star-fill text-warning "
                v-for="num in product.star" :key="num"></i>
                <p class="ms-3 me-auto">已售出{{product.sell_num}}</p>
                <span class="text-dark" @click.prevent="setFav(product.id)">
                  <i class="h4 bi bi-suit-heart-fill text-red"
                  v-if="this.favorited.indexOf(product.id) > -1"></i>
                  <i class="h4 bi bi-suit-heart text-red" v-else></i>
                </span>
              </div>
              <hr>
              <p v-html="product.description" class="mt-3"></p>
              <div class="d-flex justify-content-end align-items-end">
                <span class="text-muted">
                    售價 ${{$filters.currency(product.origin_price)}}元</span>
                <div class="h3 ms-auto mb-0 text-danger">
                  <small>特價 NT$</small>
                  <strong>{{$filters.currency(product.price)}}元</strong>
                </div>
              </div>
              <hr />
              <div class="input-group mt-3">
                <select name="" class="form-control mr-1" v-model="product.num">
                  <option :value="num" v-for="num in 10" :key="num" class="text-center">
                       {{num}}  {{product.unit}}</option>
                </select>
                <button type="button" class="btn btn-outline-danger px-3"
                  @click="addCart(product.id, product.num)"
                  :disabled="this.status.loadingItem === product.id">
                    <div v-if="this.status.loadingItem === product.id"
                    class="spinner-border spinner-border-sm" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    訂購
                  </button>
              </div>
            </div>
          </div>

          <div class="col-md-8">
            <h3>詳細介紹</h3>
            <div class="h5"  v-html="product.content">

            </div>
            <div v-for="url in product.imagesUrl" :key="url" class="mt-3">
                <img :src="url" class="w-100" alt="" />
            </div>

            <div class="my-4 bg-gray p-3" role="alert">
              <ShoppingNotes></ShoppingNotes>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style>
.BGcolor{
  background-color: #fff;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
}
</style>
<script>
import ShoppingNotes from '../../components/user/ShoppingNotes.vue';
import emitter from '@/methods/emitter';

export default {
  components: {
    ShoppingNotes,
  },
  data() {
    return {
      favorited: JSON.parse(localStorage.getItem('favoriteItem')) || [],
      product: {},
      status: {
        loadingItem: '',
      },
      isLoading: false,
    };
  },
  methods: {
    getProduct(id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          // console.log(res);
          this.product = res.data.product;
          this.product.num = 1;
          this.product.content = this.product.content.replace(/\n/g, '<br>');
          this.product.description = this.product.description.replace(/\n/g, '<br>');
        //   this.pagination = res.data.pagination;
        }
      });
    },
    addCart(id, num) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty: num,
      };
      this.$http.post(api, { data: cart }).then((res) => {
        if (res.data.success) {
          // console.log(res);
          emitter.emit('update-cart');
          this.status.loadingItem = '';
          this.$httpMessageState(res, '加入購物車');
        }
      });
    },
    setFav(id) {
      const index = this.favorited.findIndex((el) => id === el);
      if (this.favorited.indexOf(id) < 0) {
        this.favorited.push(id);
      } else {
        console.log(this.favorited);
        this.favorited.splice(index, 1);
      }
      localStorage.setItem('favoriteItem', JSON.stringify(this.favorited));
    },
  },
  created() {
    const seed = this.$route.params.id;
    // console.log(seed);
    this.getProduct(seed);
  },
};
</script>
