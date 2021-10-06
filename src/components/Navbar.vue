<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">控制台</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/dashboard/products">產品</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/dashboard/coupons">優惠券</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click.prevent="logout">登出</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  methods: {
    logout() {
      const api = `${process.env.VUE_APP_API}logout`;
      console.log(api);
      this.$http.post(api).then((res) => {
        if (res.data.success) {
          //   console.log(res);
          this.$router.push('/login');
        }
      });
    },
  },
};
</script>
