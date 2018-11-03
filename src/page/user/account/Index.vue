<template>
    <div>
      <van-nav-bar title="账号与安全" left-arrow  @click-left="$close()" />

      <van-cell-group>
        <van-cell title="手机号" :value="mobile" label="" @click="" is-link=""></van-cell>
        <van-cell title="登录密码" :value="password" label="" @click="" is-link=""></van-cell>
      </van-cell-group>
      <van-cell-group class="auth">
        <van-cell title="微信账号" :value="wechat" label="" @click="" is-link=""></van-cell>
      </van-cell-group>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  computed: {
    ...mapState(['mobile', 'password', 'wechat'])
  },
  created () {
    this.getUserAccount();
  },
  methods: {
    ...mapActions(['getUserAccount'])
  }
};
</script>

<style lang="stylus">
  html
    background #f8f8f8
    .auth
      margin-top: 15px
</style>
