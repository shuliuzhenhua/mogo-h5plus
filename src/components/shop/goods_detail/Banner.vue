<template>
    <div class="banner">
      <van-swipe :autoplay="3000" >
        <van-swipe-item v-for="(image, index) in banner" :key="index">
          <img v-lazy="image" @click="handleImageClick(index)"/>
        </van-swipe-item>
      </van-swipe>
    </div>
</template>

<script>
import { ImagePreview } from 'vant';
export default {
  props: {
    banner: {
      type: Array
    }
  },
  methods: {
    handleImageClick (i) {
      ImagePreview({
        images: [
          ...this.banner
        ], startPosition: i
      })
    }
  }
}
</script>

<style scoped lang="stylus">
  .banner
    height: 0
    padding-bottom: 100vw
    img
      width: 100%
</style>
