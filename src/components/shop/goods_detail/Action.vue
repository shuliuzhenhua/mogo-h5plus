<template>
  <van-goods-action>
    <van-goods-action-mini-btn icon="home" text="首页" @click="toIndex" />
    <van-goods-action-mini-btn icon="cart" text="购物车" @click="onClickCart" />
    <van-goods-action-big-btn text="加入购物车" @click="onClickAddCart" />
    <van-goods-action-big-btn text="立即购买" @click="onClickBuy" primary />
  </van-goods-action>
</template>

<script>
export default {
  methods: {
    onClickCart() {
      alert('单击购物车');
    },
    onClickAddCart() {
      this.$emit('showSku', 'add');
    },
    onClickBuy() {
      this.$emit('showSku', 'buy');
    },
    toIndex() {
      this.$fire(this.$launch().id, {}, 'goodsDetailEvent');
    },
  },
};
</script>

<style scoped lang="stylus">
</style>
