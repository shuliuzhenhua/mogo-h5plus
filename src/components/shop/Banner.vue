<template>
    <div>
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in banner" :key="index">
          <img v-lazy="item.image" class="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
</template>

<script>
export default {
  props: {
    banner: {
      type: Array
    }
  }
}
</script>

<style scoped lang="stylus">
  >>> .image
    width: 100%
    height: 40vw
</style>
