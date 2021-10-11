<template>
  <!-- 訂閱 -->
  <div
    class="position-relative"
    style="background-image: url('https://images.unsplash.com/photo-1526554850534-7c78330d5f90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80');
    height: 300px; background-size: cover; background-position: center"
  >
    <div class="index-mask text-white d-flex flex-column justify-content-center">
      <div class="container" data-aos="fade-up">
        <label for="subscribe" class="mb-2">訂閱我們</label>
        <p>好康情報不錯過！</p>
        <Form
          ref="subscribeForm" @submit="subscribe" v-slot="{ errors }"
          class="input-group"
        >
          <Field
            type="email" class="form-control py-2" id="subscribe"
            rules="email" name="E-mail" placeholder="請輸入您的 E-mail"
            :class="{ 'is-invalid': errors['E-mail'] }"
            v-model="subscribeMail"
          />
          <button
            type="submit" class="btn btn-primary"
            :disabled="subscribeMail === '' || errors['E-mail']"
          >
            訂閱
          </button>
          <ErrorMessage class="invalid-feedback" name="E-mail"/>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subscribeMail: '',
    };
  },
  methods: {
    subscribe() {
      this.subscribeMail = '';
      this.$swal.fire({ icon: 'success', title: '訂閱成功！\n馬上掌握第一手優惠資訊～' });
    },
  },
};
</script>
