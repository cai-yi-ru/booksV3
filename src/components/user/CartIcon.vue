<template>
  <div class="pe-3 ">
    <button class="cart d-none d-lg-block"  :class="{'visually-hidden': hidden , }"
    @click.prevent="$router.push(`/cart`)">
      <i class="bi bi-cart2"></i>
      <span class="badge rounded-pill bg-danger">{{totleNum}}</span>
    </button>
  </div>
</template>

<script>
import emitter from '@/methods/emitter';

export default {
  data() {
    return {
      carts: [],
      totleNum: 0,
      hidden: false,
    };
  },
  methods: {
    getCart() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.carts = res.data.data;
          console.log(res.data.data);
          let total = 0;
          this.carts.carts.forEach((item) => {
            total += item.qty;
          });
          this.totleNum = total;
          console.log(this.totleNum);
        }
      });
    },
  },
  created() {
    this.getCart();
    emitter.on('update-cart', () => {
      this.getCart();
    });
  },
  watch: {
    $route(route) {
      console.log(route.name);
      const vm = this;
      if (route.name === 'orderconfirmation' || route.name === 'userinfo' || route.name === 'cart') {
        vm.hidden = true;
        console.log(vm.hidden);
      } else {
        vm.hidden = false;
      }
    },
  },
};
</script>
