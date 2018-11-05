<template>
  <div>
    <van-nav-bar left-arrow title="密码登录" @click-left="$hide()" />
    <login-password-request />
    <login-password-footer />
  </div>
</template>

<script>
import LoginPasswordRequest from '@/components/user/login_password/Request';
import LoginPasswordFooter from '@/components/user/login_password/Footer';
export default {
  components: {
    LoginPasswordRequest,
    LoginPasswordFooter,
  },
};
</script>

<style lang="stylus">
html {
  background: #f8f8f8;
}
</style>
