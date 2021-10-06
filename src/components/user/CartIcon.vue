<template>
  <div class="pe-3 ">
    <button class="cart d-none d-lg-block"  :class="{'visually-hidden': hidden , }"
    @click.prevent="$router.push(`/cart`)">
      <i class="bi bi-cart2"></i>
      <span class="badge rounded-pill bg-danger">{{totleNum}}</span>
    </button>
  </div>
</template>

<style>
.cart {
  z-index: 15;
  position: fixed;
  bottom: 100px;
  right: 15px;
  width: 55px;
  height: 55px;
  color: #e2c79e;
  background-color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.5s;
  border: 2px #e2c79e solid;
  border-radius: 50%;
  transition: all 0.3s;
  font-size: 35px;
}
.badge {
  position: absolute;
  top: 0x;
  right: -5px;
  font-size: 10px;
}
</style>

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
