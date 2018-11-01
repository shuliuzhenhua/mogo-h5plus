<template>
  <div class="sku">
    <van-sku
      v-model="show"
      :sku="data.sku"
      :goods="data.goods"
      :goods-id="data.goodsId"
      :hide-stock="data.sku.hide_stock"
      @buy-clicked="onBuy"
      @add-cart="onAddCart"
      ref="sku"
    >

      <van-button
        type="danger"
        size="large"
        slot="sku-actions"
        v-if="type === 'add'"
        @click="onAddCart"
      >下一步</van-button>

      <van-button
        type="danger"
        size="large"
        slot="sku-actions"
        v-if="type === 'buy'"
        @click="onBuy"
      >下一步</van-button>

    </van-sku>
  </div>
</template>

<script>
  export default {
    props: {
      data: {
        type: Object,
      },
      showBase: {
        type: Boolean
      },
      type: {
        type: String
      }
    },
    data () {
      return {
        show: false
      }
    },
    watch: {
      showBase () {
        this.show = this.showBase
      },
      show () {
        this.$emit('show', this.show)
      }
    },
    methods: {
      onBuy () {
        console.log(this.$refs.sku.getSkuData())
        alert('点击购买')
      },
      onAddCart () {
        console.log(this.$refs.sku.getSkuData())
        alert('加入购物车')
      }
    }
  }
</script>

<style scoped lang="stylus">

</style>
