<template>
  <div class="banner">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in banner" :key="index" ref="swipeItem">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { ImagePreview } from 'vant';
import { tap } from '../../../utils/tap';

export default {
  props: {
    banner: {
      type: Array,
    },
  },
  mounted() {
    setTimeout(() => {
      this.addTapListener();
    }, 1000);
  },
  methods: {
    addTapListener() {
      // 因为点击事件，使用了 fastclick 和 vant 框架冲突了。所以就用自己写的
      let swipeItem = this.$refs.swipeItem;
      for (let i = 0; i < swipeItem.length; i++) {
        tap(swipeItem[i].$el, () => {
          ImagePreview({
            images: [...this.banner],
            startPosition: i,
          });
        });
      }
    },
  },
};
</script>

<style scoped lang="stylus">
.banner {
  height: 0;
  padding-bottom: 100vw;

  img {
    width: 100%;
  }
}
</style>
