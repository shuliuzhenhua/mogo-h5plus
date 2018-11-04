<template>
    <div>
      <van-nav-bar title="账号与安全" left-arrow  @click-left="$close()" />

      <van-cell-group>
        <van-cell title="手机号" :value="mobile" label="" @click="handleMobileClick(mobile)" is-link=""></van-cell>
        <van-cell title="登录密码" :value="password" label="" @click="handlePasswordClick(password)" is-link=""></van-cell>
      </van-cell-group>
      <van-cell-group class="auth">
        <van-cell title="微信账号" :value="wechat" label="" @click="handleWechatClick(wechat)" is-link=""></van-cell>
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
    window.addEventListener('mobileEvent', () => {
      this.$show('user.account');
      setTimeout(() => {
        this.$close('user.account_mobile_bind');
        this.$close('user.account_mobile_bind_confirm');
        this.$close('user.account_mobile_update');
        this.$close('user.account_mobile_update_confirm');
      }, 300);
      this.getUserAccount();
    });
    this.getUserAccount();
  },
  methods: {
    ...mapActions(['getUserAccount']),
    handleMobileClick (mobile) {
      if (mobile === '未绑定') {
        this.$open('user.account_mobile_bind', { popGesture: 'close' })
      } else {
        this.$open('user.account_mobile_update', { popGesture: 'close' }, {mobile})
      }
    },
    handlePasswordClick (password) {
      if (this.mobile === '未绑定') {
        alert('询问是否需要绑定手机')
      } else {



        if (password) {
          alert('去设置密码的页面');
        } else {
          alert('去身份验证页面');
        }

      }
    },
    handleWechatClick (wechat) {
      if (wechat === '未绑定') {
        alert('绑定微信');
      }
    }
  }
};
</script>

<style lang="stylus">
  html
    background #f8f8f8
    .auth
      margin-top: 15px
</style>
