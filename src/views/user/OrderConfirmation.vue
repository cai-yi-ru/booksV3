<template>
  <Loading :active="isLoading"></Loading>
  <div class="container my-5">
    <div class="row text-center">
      <div class="col-12 col-md-4"><!-- 小裝置為1列 大裝置並排-->
        <div class="alert alert-success alert-rounded" role="alert">
          1.購物車內容
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="alert alert-success alert-rounded " role="alert">
          2.填寫資訊
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="alert alert-warning alert-rounded" role="alert">
          3.完成
        </div>
      </div>
    </div>
    <div class="col-md-10 m-auto mt-5">
      <div class="card text-center">
        <div class="card-header">
          <span class="h4">訂單</span>
        </div>
        <div class="card-body">
          <div class="my-5 row justify-content-center">
            <form class="col-md-10" @submit.prevent="payOrder">
              <table class="table align-middle">
                <thead>
                  <th>品名</th>
                  <th>數量</th>
                  <th>單價</th>
                </thead>
                <tbody>
                  <tr v-for="item in order.products" :key="item.id">
                    <td>{{item.product.title}}</td>
                    <td>{{item.qty}} / {{item.product.unit}}</td>
                    <td class="text-end">{{$filters.currency(item.final_total)}}元</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="2" class="text-end">總計</td>
                    <td class="text-end text-success">{{$filters.currency(order.total)}}元</td>
                  </tr>
                </tfoot>
              </table>

              <table class="table">
                <tbody>
                  <tr>
                    <th width="100">Email</th>
                    <td>{{order.user.email}}</td>
                  </tr>
                  <tr>
                    <th>姓名</th>
                    <td>{{order.user.name}}</td>
                  </tr>
                  <tr>
                    <th>收件人電話</th>
                    <td>{{order.user.tel}}</td>
                  </tr>
                  <tr>
                    <th>收件人地址</th>
                    <td>{{order.user.address}}</td>
                  </tr>
                  <tr>
                    <th>付款狀態</th>
                    <td>
                      <span v-if="!order.is_paid">尚未付款</span>
                      <span class="text-success" v-else>付款完成</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="text-end me-5 mt-5">
                <button class="btn btn-danger" v-show="!order.is_paid">確認付款去</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      order: {
        user: {},
      },
      orderId: '',
      isLoading: false,
    };
  },
  methods: {
    getOrder() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
      // console.log(api);
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.order = res.data.order;
          console.log(res.data.order);
        }
      });
    },
    payOrder() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`;
      this.isLoading = true;
      this.$http.post(api).then((res) => {
        this.isLoading = false;
        console.log(res);
        if (res.data.success) {
          this.getOrder();
        }
      });
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
    // console.log(this.orderId);
    this.getOrder(this.orderId);
  },
};
</script>
