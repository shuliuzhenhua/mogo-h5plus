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
import {toIndex} from "../../../utils/view";

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
        }
      }).then(res => {
        let token = res.data;
        localStorage.setItem('isLogin', '1');
        localStorage.setItem('token', token);
        setTimeout(() => {
          toIndex();
        }, 200)
      })
    }
  }
};
</script>

<style scoped lang="stylus">
  .disabled
    background rgba(124, 124, 124, 0.51);
    color white;
  >>> .van-button
    border-radius 10px;
    margin 30px 0;
</style>
