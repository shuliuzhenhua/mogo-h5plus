<template>
  <div class="avatar-img">
    <van-uploader :after-read="onRead">
      <div>
        <img :src="avatar" alt="">
      </div>
    </van-uploader>
  </div>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String
    }
  },
  methods: {
    onRead(file) {
      this.$emit('update', file.content);
    }
  }
}
</script>

<style scoped lang="stylus">
  .avatar-img
    position: relative
    height: 100px
    width: 100px
    margin: 0 auto
    border-radius 50%
    box-shadow: 0 1px 1px 0 #666666;
    overflow: hidden;
    img
      width: 100%
</style>
