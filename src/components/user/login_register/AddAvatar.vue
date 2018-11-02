<template>
  <div class="avatar-img-add">
    <van-uploader :after-read="onRead">
      <van-icon name="xiangji"></van-icon>
      <div class="desc">上传照片</div>
      <div class="avatar-add">
        <van-icon name="jia" />
      </div>
    </van-uploader>
  </div>
</template>

<script>
export default {
  methods: {
    onRead(file) {
      this.$emit('update', file);
    }
  }
}
</script>

<style scoped lang="stylus">
  >>> .van-icon-xiangji
    font-size: 45px;
    color #7C7C7C
    padding-top: 10px
  >>> .van-icon-jia
    font-weight bolder
  .avatar-img-add
    position: relative
    height: 100px
    width: 100px
    margin: 0 auto
    border-radius 50%
    box-shadow: 0 1px 1px 0 #666666;
    text-align: center
    .desc
      line-height: 28px;
    .avatar-add
      width: 30px
      height: 30px
      background: red
      border-radius 50%
      text-align: center
      color white;
      font-weight bolder
      font-size: 16px
      line-height: 30px;
      position: absolute;
      right: -20px;
      bottom: -20px;
      margin: 0 auto
</style>
