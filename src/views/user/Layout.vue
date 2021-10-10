<template>
  <div class="box2">
      <div>
          <UserNavbar :class="{  'navbar-light': true }"></UserNavbar>
      </div>
    <div class="mt-3 position-relative">
      <ToastMessages></ToastMessages>
      <CartIcon></CartIcon>
      <router-view/>
    </div>
  </div>
  <UserFooter></UserFooter>
</template>

<style>
.box2{
  display: flex;
  flex-direction: column;
  min-height: 80vh;
}
.box {
  background: #eee;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
    345deg,
    #7373B9 2%,
    #7373B9 60%,
    #ffffff 60%,
    #ffffff 100%,
    #e8e8e8 100%
  );
  letter-spacing: 0.07em;
}
</style>

<script>
import emitter from '@/methods/emitter';
import ToastMessages from '@/components/ToastMessages.vue';
import UserNavbar from '@/components/user/UserNavbar.vue';
import CartIcon from '@/components/user/CartIcon.vue';
import UserFooter from '@/components/user/UserFooter.vue';

export default {
  components: {
    UserNavbar,
    ToastMessages,
    CartIcon,
    UserFooter,
  },
  provide() {
    return {
      emitter,
    };
  },
};
</script>
