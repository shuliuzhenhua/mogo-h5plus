<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <router-view name="tabbar" />
  </div>
</template>
<script>
export default {
  created() {
    window.addEventListener('loginEvent', () => {
      this.$launch().show();
      setTimeout(() => {
        this.$close('user.login');
        this.$close('user.login_code');
        this.$close('user.login_password');
        this.$close('user.login_register');
      }, 500);
    });
    window.addEventListener('goodsDetailEvent', () => {
      this.$launch().show();
      setTimeout(() => {
        this.$close('shop.goods_detail');
      });
    });
  },
};
</script>

<style lang="stylus">
</style>
