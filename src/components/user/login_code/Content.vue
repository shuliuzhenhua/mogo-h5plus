<template>
    <div class="content">
      <div class="title">输入验证码</div>
      <div class="desc">已发送4位数验证码至</div>
      <div class="mobile">{{ mobile }}</div>
    </div>
</template>

<script>
export default {
  props: {
    mobile: {
      type: String
    }
  }
}
</script>

<style scoped lang="stylus">
  .content
    text-align: center
    .title
      font-size: 25px
      font-weight bold
      margin-top: 25px
      margin-bottom: 15px
    .desc
      color #6c6c6c
      font-size: 18px
      line-height: 24px;
      margin-bottom: 10px
    .mobile
      font-size: 18px
      font-weight lighter
</style>
