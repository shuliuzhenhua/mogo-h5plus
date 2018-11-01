<template>
    <div>
      <van-cell-group>
        <van-cell>
          <p class="like">
            <van-icon name="like-o" />
            猜你喜欢
            <van-icon name="like-o" />
          </p>
        </van-cell>
        <goods :goodsList="products.item" @onClick="handleGoodsClick"/>
        <van-cell>
          <van-button type="warning" :loading="false" @click="$emit('toMore')" size="large">
            查看更多
          </van-button>
        </van-cell>
      </van-cell-group>
    </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Object
    }
  },
  methods: {
    handleGoodsClick (goods) {
      this.$emit('onClick', goods)
    }
  }
}
</script>

<style scoped lang="stylus">
  .like
    text-align: center
    font-size: 18px
    color #ff441f
</style>
