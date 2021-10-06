<template>
  <Loading :active="isLoading"></Loading>
  <div  class="container my-5">
    <div>
        <div>
            <h1 class="text-center mt-5">收藏清單</h1>
        </div>
      <div class="row mt-5">
        <div class="col-md-12">
          <div class="row row-cols-1 row-cols-md-3">
            <div class="col" v-for="item in favlist" :key="item.id">
              <div class="card h-100 border-0 box-shadow">
                    <div style="height: 180px; background-size: cover;
                    background-position: center"  class="w-100"
                    :style="{backgroundImage:`url(${item.imageUrl})`}">
                    </div>
                <div class="card-body">
                  <span class="badge bg-secondary float-end ml-2">{{ item.category }}</span>
                  <h5 class="card-title">{{item.title}}</h5>
                  <p class="card-text">
                  </p>
                  <div class="d-flex justify-content-between align-items-baseline">
                    <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div>
                    <del class="h6" v-if="item.price">原價 {{ item.origin_price }} 元</del>
                    <div class="h5" v-if="item.price"><strong>現在只要
                      <span class="text-danger">{{ item.price }}</span> 元
                      </strong></div>
                  </div>
                </div>
                <div class="card-footer border-top-0 bg-white d-flex mb-2 mx-2">

                  <button type="button" class="btn btn-outline-secondary btn-sm"
                  @click.prevent="getProduct(item.id)">
                    <i class="fas fa-spinner fa-spin"></i>
                    查看更多
                  </button>
                  <button type="button" class="btn btn-outline-danger btn-sm ms-auto"
                  @click="addCart(item.id)" :disabled="this.status.loadingItem === item.id">
                    <div v-if="this.status.loadingItem === item.id"
                    class="spinner-border spinner-border-sm" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    加到購物車
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
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
export default {
  data() {
    return {
      favorited: JSON.parse(localStorage.getItem('favoriteItem')) || [],
      products: [],
      product: {},
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
  methods: {
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/?page=${page}`;
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          console.log(res.data.products);
          this.products = res.data.products;
        //   this.pagination = res.data.pagination;
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
        if (res.data.success) {
          console.log(res);
          this.status.loadingItem = '';
          this.$httpMessageState(res, '加入購物車');
        }
      });
    },
  },
  computed: {
    favlist() {
      return this.products.filter((item) => this.favorited.indexOf(item.id) > -1);
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
