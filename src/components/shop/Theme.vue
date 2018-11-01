<template>
    <div class="theme">
      <van-cell-group v-for="(item, index) of theme" :key="index">
        <van-cell :title="item.title" />
        <goods :goodsList="item.item" @onClick="handleGoodsClick"/>
      </van-cell-group>
    </div>
</template>

<script>
export default {
  props: {
    theme: {
      type: Array
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

</style>
