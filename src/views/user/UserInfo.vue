<template>
  <div class="container">
    <div class="row text-center">
      <div class="col-12 col-md-4"><!-- 小裝置為1列 大裝置並排-->
        <div class="alert alert-success alert-rounded" role="alert">
          1.購物車內容
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="alert alert-warning alert-rounded " role="alert">
          2.填寫資訊
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div class="alert alert-dark alert-rounded" role="alert">
          3.完成
        </div>
      </div>
    </div>
    <div class="my-5 row justify-content-center">
    <Form class="col-md-6" v-slot="{ errors }"
          @submit="createOrder">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <Field id="email" name="email" type="email" class="form-control"
                  :class="{ 'is-invalid': errors['email'] }"
                  placeholder="請輸入 Email" rules="email|required"
                  v-model="form.user.email"></Field>
        <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
      </div>

      <div class="mb-3">
        <label for="name" class="form-label">收件人姓名</label>
        <Field id="name" name="姓名" type="text" class="form-control"
                  :class="{ 'is-invalid': errors['姓名'] }"
                  placeholder="請輸入姓名" rules="required"
                  v-model="form.user.name"></Field>
        <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
      </div>

      <div class="mb-3">
        <label for="tel" class="form-label">收件人電話</label>
        <Field id="tel" name="電話" type="tel" class="form-control"
                  :class="{ 'is-invalid': errors['電話'] }"
                  placeholder="請輸入電話" rules="required"
                  v-model="form.user.tel"></Field>
        <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
      </div>

      <div class="mb-3">
        <label for="address" class="form-label">收件人地址</label>
        <Field id="address" name="地址" type="text" class="form-control"
                  :class="{ 'is-invalid': errors['地址'] }"
                  placeholder="請輸入地址" rules="required"
                  v-model="form.user.address"></Field>
        <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
      </div>

      <div class="mb-3">
        <label for="message" class="form-label">留言</label>
        <textarea name="" id="message" class="form-control" cols="30" rows="10"
                  v-model="form.message"></textarea>
      </div>
      <div class="text-end">
        <button class="btn btn-danger">送出訂單</button>
      </div>
    </Form>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      orderlist: JSON.parse(localStorage.getItem('orderList')) || [],
    };
  },
  methods: {
    createOrder() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      const order = this.form;
      this.$http.post(api, { data: order }).then((res) => {
        if (res.data.success) {
          // console.log(res);
          // console.log(res.data.orderId);
          this.$httpMessageState(res, '送出訂單');
          this.orderlist.push(res.data.orderId);
          // console.log(this.orderlist);
          localStorage.setItem('orderList', JSON.stringify(this.orderlist));
          this.$router.push(`/OrderConfirmation/${res.data.orderId}`);
        }
      });
    },
  },
};
</script>
