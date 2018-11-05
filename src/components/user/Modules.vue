<template>
  <div class="user-modules">
    <van-cell-group>
      <van-cell icon="location" title="我的地址" @click="toAddress" isLink></van-cell>
      <van-cell icon="pending-payment" title="钱包" @click="toWallet" isLink></van-cell>
    </van-cell-group>

    <van-cell-group class="scan">
      <van-cell icon="saoyisao1" isLink title="扫一扫" @click="toScan" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  methods: {
    toWallet() {
      alert('去钱包');
    },
    toAddress() {
      alert('去地址');
    },
    toScan() {
      alert('去扫码');
    },
  },
};
</script>

<style scoped lang="stylus">
.user-modules {
  padding-top: 15px;
  background: #f0f0f0;
}

.scan {
  margin-top: 30px;
}
</style>
