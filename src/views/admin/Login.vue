<template>
<div class="loginbody">
  <div class="login ">
    <form class="form" @submit.prevent="signin">
      <h2>管理者登入</h2>
      <div class="loginGroup mb-2">
        <label for="inputEmail" class="sr-only">帳號</label>
          <input
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="請輸入電子信箱"
            required
            autofocus
            v-model="user.username"
          />
      </div>
      <div class="loginGroup mb-2">
        <label for="inputPassword" class="sr-only">密碼</label>
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="請輸入密碼"
            required
            v-model="user.password"
          />
      </div>
      <div class="btnGroup">
        <button class="btn btn-lg btn-primary btn-block me-2">確認</button>
        <button class="btn btn-lg btn-outline-secondary btn-block text-white"
        @click.prevent="$router.push(`/`)">取消</button>
      </div>
    </form>
  </div>
</div>

</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    signin() {
      const api = `${process.env.VUE_APP_API}admin/signin`;
      // console.log(api);
      this.$http.post(api, this.user)
        .then((res) => {
          if (res.data.success) {
            const { token, expired } = res.data;
            document.cookie = `snToken=${token};expires=${new Date(expired)}`;
            console.log(res);
            // 跳轉到dashboard頁面
            this.$router.push('/dashboard/products');
          }
        });
    },
  },
};
</script>
