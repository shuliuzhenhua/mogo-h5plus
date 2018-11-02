<template>
    <div>
      <van-nav-bar  @click-left="$hide()">
        <van-icon name="cha" slot="left" />
      </van-nav-bar>

      <div class="login-content">
        <div class="desc">登录后可正常使用</div>


        <div class="field van-hairline--bottom">
          <van-field v-model="mobile" placeholder="输入手机号" type="tel" />
        </div>

        <div>
          <van-button type="primary" size="large" @click="login" v-show="sure">
            确定
          </van-button>
          <van-button disabled class="disabled" size="large" v-show="!sure">
            确定
          </van-button>
        </div>

        <div class="password" @click="passwordLogin">
          密码登录
        </div>

        <div class="auth" @click="wechatLogin">
          <van-icon name="weixin" class="weixin" />微信
        </div>
      </div>

    </div>
</template>

<script>
import validator from './validate';
import { open, close } from "../../../utils/view";

export default {
  data () {
    return {
      mobile: '',
      lastMobile: '',
      sure: false
    }
  },
  watch: {
    mobile () {
      this.mobile.length === 11 ? this.sure = true : this.sure = false;
    }
  },
  methods: {
    login () {
      validator(this.$data).then(() => {
        if (this.mobile === this.lastMobile) {
          open('user.login_code', {}, {mobile: this.mobile});
        } else {
          this.lastMobile = this.mobile;
          close('user.login_code', 'none');
          console.log(this.lastMobile);
          console.log(this.mobile);
          setTimeout(() => {
            open('user.login_code', {}, {mobile: this.mobile});
          }, 300)
        }
      })
    },
    wechatLogin () {
      alert('微信登录')
    },
    passwordLogin () {
      alert('密码登录')
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/theme.styl"
  setDisabled();
  >>> .van-field__control
    height: 40px
    /*background red*/
    font-size: 20px
  >>> .van-button
    border-radius 10px;
    margin 30px 0;
  >>> .van-icon-weixin
    color #44bb00
    padding-right: 5px
    font-size: 22px;
  .login-content
    width: 320px
    margin 0 auto;
    text-align: center
    .desc
      font-size: 20px
      font-weight:bold
      margin: 20px 0
    .password
      color rgba(47, 105, 255, 0.89)
      font-size: 16px
      font-weight bold
      margin-top: 5px;
    .auth
      width: 100vw
      text-align: center
      position: absolute
      bottom: 50px;
      left: 0
      font-size: 20px;
</style>
