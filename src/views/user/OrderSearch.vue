<template>
    <div class="container">

        <div class="my-5">
            <h1 class="text-center">訂單查詢</h1>
        </div>
        <div class="list-group bg-secondary my-5" v-for="order in orders" :key="order">
            <a
            class="list-group-item list-group-item-action" aria-current="true">
                <span class="h4">訂單-{{order.create_at}}</span>
            </a>
            <div>
            <div class="card card-body">
                <div class="my-5 row justify-content-center">
            <form class="col-md-10" @submit.prevent="payOrder(order.id)">
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
                <button class="btn btn-danger" v-show="!order.is_paid">付款去</button>
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
      orderlist: JSON.parse(localStorage.getItem('orderList')) || [],
      orders: [],
    };
  },
  methods: {
    getOrderList() {
      this.orderlist.filter((item) => this.getOrder(item));
    },
    getOrder(id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${id}`;
      // console.log(api);
      this.isLoading = true;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.order = res.data.order;
          this.orders.push(this.order);
        }
      });
    },
    payOrder(id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${id}`;
      this.isLoading = true;
      this.$http.post(api).then((res) => {
        this.isLoading = false;
        console.log(res);
      });
    },
  },
  created() {
    this.getOrderList();
  },
};
</script>
