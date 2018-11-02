<template>
    <div>
      <van-cell-group>
        <van-cell title="个人资料" isLink @click="$open('user.info',{},{create: true})" />
        <van-cell title="账户与安全" isLink @click="$open('user.account',{},{popGesture: 'close'})" />
      </van-cell-group>

      <van-cell-group class="feedback">
        <van-cell title="意见反馈" isLink @click="$open('system.feedback',{},{popGesture: 'close'})" />
      </van-cell-group>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="stylus">
  .feedback
    margin-top: 40px
</style>
