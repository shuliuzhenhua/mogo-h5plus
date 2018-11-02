<template>
  <van-button class="out" size="large" @click="out">退出登录</van-button>
</template>

<script>
export default {
  methods: {
    out () {
      this.$dialog.confirm({
        title: '退出确认',
        message: '是否确定退出登录'
      }).then(() => {
        localStorage.clear();
        this.$open('user.login', {
          popGesture: 'none',
          bounce: 'none'
        })
      })
    }
  }
}
</script>

<style scoped lang="stylus">
  .out
    margin-top: 300px
</style>
