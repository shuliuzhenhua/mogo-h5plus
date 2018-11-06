<template>
  <div>
    <vcode @finished="onFinished" v-model="code" />
    <van-button size="large" type="primary" v-show="code.length === 4" @click="handleBtnSubmit">确定</van-button>
    <van-button size="large" disabled class="disabled" v-show="code.length !== 4">确定</van-button>
  </div>
</template>

<script>
import Vue from 'vue';
import { Vcode } from '../../../plugin/index';

Vue.use(Vcode);
export default {
  data() {
    return {
      code: '',
    };
  },
  props: {
    mobile: {
      type: String,
    },
  },
  methods: {
    onFinished() {
      this.handleBtnSubmit();
    },
    handleBtnSubmit() {
      this.$http
        .request({
          url: 'connect/mobile',
          data: {
            mobile: this.mobile,
            code: this.code,
          },
          handle: true,
          methods: 'post',
        })
        .then(res => {
          let token = res.data;
          localStorage.setItem('token', token);
          this.$fire(this.$launch().id, {}, 'loginEvent');
        })
        .catch(err => {
          const data = err.data;
          if (data.error_code === 10006) {
            this.$open(
              'user.login_register',
              { popGesture: 'close' },
              { mobile: this.mobile, code: this.code }
            );
          } else {
            this.$dialog.alert({
              message: data.msg,
            });
          }
        });
    },
  },
};
</script>

<style scoped lang="stylus">
@import '~styles/theme.styl';

setDisabled();

>>> .van-button {
  border-radius: 10px;
  margin: 30px 0;
}
</style>
