<template>
  <div>
    <van-cell title="商品详情" />
    <div v-html="content" class="content"></div>
  </div>
</template>

<script>
  export default {
    props: {
      content: {
        type: String
      }
    }
  }
</script>

<style scoped lang="stylus">
  .content
    width: 90%
    margin: 0 auto
    >>> img
      width: 100%
      display block
      margin: 10px auto
</style>
