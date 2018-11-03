<template>
    <div>
      <van-nav-bar
        title="修改名字"
        right-text="完成"
        left-arrow
        @click-right="onClickRight"
        @click-left="$close()" />
      <div class="user-info-title">修改个人资料</div>
      <van-cell-group>
        <van-field v-model="nickname"/>
      </van-cell-group>
    </div>
</template>

<script>
export default {
  data () {
    return {
      nickname: ''
    }
  },
  created () {
    this.nickname = this.$current().nickname || '';
  },
  methods: {
    onClickRight () {
      this.$fire('user.info', {nickname: this.nickname});
      setTimeout(() => {
        this.$close()
      }, 100)
    }
  }
};
</script>

<style lang="stylus">
  .van-nav-bar__text
    color red
  .user-info-title
    line-height: 40px;
    padding: 0 10px
    font-size: 15px
    color gray
  html
    background #f8f8f8
</style>
