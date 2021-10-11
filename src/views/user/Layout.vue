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
