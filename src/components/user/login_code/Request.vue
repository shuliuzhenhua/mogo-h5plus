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
      code: ''
    }
  },
  props: {
    mobile: {
      type: Number,
    },
  },
  methods: {
    onFinished () {
      this.handleBtnSubmit()
    },
    handleBtnSubmit () {
      alert('提交')
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
