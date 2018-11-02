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
import { open, toIndex} from "../../../utils/view";

Vue.use(Vcode);
export default {
  data() {
    return {
      code: ''
    }
  },
  props: {
    mobile: {
      type: String,
    },
  },
  methods: {
    onFinished () {
      this.handleBtnSubmit()
    },
    handleBtnSubmit () {
      this.$http.post({
        url: 'connect/mobile',
        data: {
          mobile: this.mobile,
          code: this.code
        },
        handle: true
      }).then(res => {
        let token = res.data;
        localStorage.setItem('isLogin', '1');
        localStorage.setItem('token', token);
        setTimeout(() => {
          toIndex();
        }, 200)
      }).catch(err => {
        const data = err.response.data;
        if (data.error_code === 10006) {
          open('user.login_register', { popGesture: 'close' })
        } else {
          this.$dialog.alert({
            message: data.msg,
          });
        }
      })
    }
  }
};
</script>

<style scoped lang="stylus">
  @import "~styles/theme.styl"
  setDisabled();
  >>> .van-button
    border-radius 10px;
    margin 30px 0;
</style>
