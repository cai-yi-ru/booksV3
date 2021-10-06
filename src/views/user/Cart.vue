<template >
<Loading :active="isLoading"></Loading>
  <div class="container my-5">
    <div class="row text-center">
      <div class="col-12 col-md-4"><!-- 小裝置為1列 大裝置並排-->
        <div class="alert alert-warning alert-rounded" role="alert">
          1.購物車內容
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="alert alert-dark alert-rounded " role="alert">
          2.填寫資訊
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="alert alert-dark alert-rounded" role="alert">
          3.完成
        </div>
      </div>
    </div>
    <div class="col-md-10 m-auto mt-5">
        <div v-if="carts.total !== 0">
            <table class="table align-middle">
            <thead>
                <tr>
                <th></th>
                <th>品名</th>
                <th style="width: 110px">數量</th>
                <th>單價</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in carts.carts" :key="item.id">
                <td>
                    <button type="button" class="btn btn-outline-danger btn-sm"
                    :disabled="this.status.loadingItem === item.id"
                    @click="delCartItem(item.id)">
                    <i class="bi bi-trash"></i>
                    </button>
                </td>
                <td>
                    {{item.product.title}}
                    <div class="text-success" v-if="item.coupon">
                    已套用優惠券
                    </div>
                </td>
                <td>
                    <div class="input-group input-group-sm">
                    <input type="number" class="form-control"
                    min="1" v-model.number="item.qty"
                    :disabled="this.status.loadingItem === item.id"
                    @change="updateCart(item)">
                    <div class="input-group-text">/ {{item.product.unit}}</div>
                    </div>
                </td>
                <td class="text-end">
                    <small v-if="carts.final_total !== carts.total"
                    class="text-success">折扣價：</small>
                    $ {{ $filters.currency(item.final_total) }}
                </td>
                </tr>
            </tbody>
            <tfoot>
            <tr>
                <td colspan="3" class="text-end">總計</td>
                <td class="text-end">{{ $filters.currency(carts.total) }}</td>
            </tr>
            <tr v-if="carts.final_total !== carts.total">
                <td colspan="3" class="text-end text-success">折扣價</td>
                <td class="text-end text-success">{{ $filters.currency(carts.final_total) }}</td>
            </tr>
            </tfoot>
            </table>
            <div class="input-group mb-3 input-group-sm">
            <input type="text" class="form-control" v-model="coupon_code"
            placeholder="請輸入優惠碼">
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button"
                @click="addCouponCode">
                套用優惠碼
                </button>
            </div>
            </div>
            <div class="d-flex">
              <button type="button" class="btn btn-outline-secondary p-3 mt-3 me-auto"
               @click.prevent="$router.push(`/products`)">
                <span class="display-6"><i class="bi bi-chevron-double-left"></i>繼續購物</span>
              </button>
              <button type="button" class="btn btn-orange p-3 mt-3"
              @click.prevent="$router.push(`/userinfo`)"
              :disabled="carts.total === 0">
                <span class="display-6 text-white">去買單
                  <i class="bi bi-chevron-double-right"></i></span>
              </button>
            </div>
        </div>
        <div v-else>
          <div class="p-5 display-2">
            <span>購物車還是空的?</span>
            <br>
            <span>還不快逛好逛滿買起來!!!</span>
          </div>
          <div class="d-flex mt-3">
              <button type="button" class="btn btn-outline-orange p-3 mt-3 m-auto"
              @click.prevent="$router.push(`/products`)">
                <span class="display-6"><i class="bi bi-cart4 me-3"></i>現在就去逛逛!!</span>
              </button>
          </div>

        </div>
    </div>
  </div>
</template>

<script>
import emitter from '@/methods/emitter';

export default {
  data() {
    return {
      carts: [],
      coupon_code: '',
      status: {
        loadingItem: '', // 對應品項ID
      },
      isLoading: false,
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
        }
      });
    },
    delCartItem(id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.status.loadingItem = id;
      this.$http.delete(api).then((res) => {
        this.status.loadingItem = '';
        if (res.data.success) {
          this.$httpMessageState(res, '移除購物車品項');
          this.getCart();
          emitter.emit('update-cart');
        }
      });
    },
    updateCart(item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      this.isLoading = true;
      this.status.loadingItem = item.id;
      const cart = {
        product_id: item.product_id,
        qty: item.qty,
      };
      this.$http.put(api, { data: cart }).then((res) => {
        this.isLoading = false;
        this.status.loadingItem = '';
        if (res.data.success) {
          this.getCart();
        }
      });
    },
    addCouponCode() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      this.isLoading = true;
      const coupon = {
        code: this.coupon_code,
      };
      this.$http.post(api, { data: coupon }).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.$httpMessageState(res, '使用優惠券');
          this.getCart();
        }
      });
    },
  },
  created() {
    this.getCart();
  },
};
</script>
