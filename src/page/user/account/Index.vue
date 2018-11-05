<template>
  <div>
    <van-nav-bar title="账号与安全" left-arrow @click-left="$close()" />

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
import { wechat } from '../../../utils/oauth';

export default {
  computed: {
    ...mapState(['mobile', 'password', 'wechat']),
  },
  created() {
    localStorage.setItem('token', 'f6fe7de6180b2fc23fd466993bbd3e75');
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
    handleMobileClick(mobile) {
      if (mobile === '未绑定') {
        this.$open('user.account_mobile_bind', { popGesture: 'close' });
      } else {
        this.$open('user.account_mobile_update', { popGesture: 'close' }, { mobile });
      }
    },
    handlePasswordClick() {
      if (this.mobile === '未绑定') {
        this.confirmBindMobile();
      } else {
        this.$open('user.account_password', { popGesture: 'close' });
      }
    },
    // 微信账号按钮点击事件处理
    handleWechatClick(wechat) {
      if (wechat === '未绑定') {
        this.bindWechat();
      } else {
        this.unBindWechat();
      }
    },
    // 确认绑定手机
    confirmBindMobile() {
      this.$dialog
        .confirm({
          title: '确认提醒',
          message: '需要绑定手机才可以设置密码',
        })
        .then(() => {
          this.$open('user.account_mobile_bind', { popGesture: 'close' });
        });
    },
    // 绑定微信
    bindWechat() {
      wechat().then(data => {
        this.$http
          .post({
            url: 'account/bind_wechat',
            data,
          })
          .then(() => {
            this.$toast('绑定成功');
            this.getUserAccount();
          });
      });
    },
    /**
     * 解绑微信
     */
    unBindWechat() {
      if (this.mobile === '未绑定') {
        this.confirmBindMobileByWechat();
      } else {
        this.$dialog
          .confirm({
            title: '解绑确认',
            message: '是否需要解绑微信',
          })
          .then(() => {
            this.confirmUnBindWechat();
          });
      }
    },
    /**
     * 确认解绑微信
     */
    confirmUnBindWechat() {
      this.$http
        .delete({
          url: 'account/wechat',
        })
        .then(() => {
          this.$toast('解绑成功');
          this.getUserAccount();
        })
        .catch(err => {
          if (err.response.data.error_code !== 40004) {
            this.$dialog.alert({
              message: err.response.data.msg,
            });
          } else {
            this.confirmBindMobileByWechat();
          }
        });
    },
    /**
     * 解绑微信时确认绑定手机号1
     */
    confirmBindMobileByWechat() {
      this.$dialog
        .confirm({
          title: '确认提醒',
          message: '需要绑定手机才可以设置解绑微信',
        })
        .then(() => {
          this.$open('user.account_mobile_bind', { popGesture: 'close' });
        });
    },
  },
};
</script>

<style lang="stylus">
html {
  background: #f8f8f8;

  .auth {
    margin-top: 15px;
  }
}
</style>
