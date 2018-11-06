<template>
  <div class="form">
    <van-cell-group>
      <van-cell>
        <van-field v-model="mobile" type="tel" label="手机号" icon="clear" placeholder="请输入登录手机号" required @click-icon="mobile = ''" class="item" />
      </van-cell>
    </van-cell-group>
    <van-cell-group>
      <van-cell>
        <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required class="item" />
      </van-cell>
    </van-cell-group>
    <van-cell-group>
      <van-cell>
        <van-button loading size="large" type="danger" v-if="loading && !disabled" />
        <van-button @click="loginClick" type="danger" size="large" v-else-if="!loading && !disabled">登录</van-button>
        <van-button class="disabled" disabled @click="loginClick" size="large" v-else-if="!loading && disabled">登录</van-button>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import validator from '@/page/user/login_password/validate.js';
export default {
  data() {
    return {
      mobile: '',
      password: '',
      loading: false,
      disabled: true,
    };
  },
  watch: {
    mobile() {
      this.disabled = this.mobile.length !== 11 || this.password.length < 6;
    },
    password() {
      this.disabled = this.mobile.length !== 11 || this.password.length < 6;
    },
  },
  methods: {
    /**
     * 登录换取token
     */
    loginClick() {
      validator(this.$data).then(() => {
        this.loading = true;
        this.$http
          .post('token/user', { mobile: this.mobile, password: this.password })
          .then(res => {
            const data = res.data;
            localStorage.setItem('token', data.token);
            this.$fire(this.$launch().id, {}, 'loginEvent');
          })
          .catch(() => {
            this.loading = false;
          });
      });
    },
  },
};
</script>

<style scoped lang="stylus">
@import '~styles/theme.styl';

setDisabled();
</style>
