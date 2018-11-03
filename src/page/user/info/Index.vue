<template>
    <div>
      <van-nav-bar title="个人资料" left-arrow  @click-left="$close()" />
      <div class="user-info-title">个人资料</div>
      <user-info-request/>
    </div>
</template>

<script>
import UserInfoRequest from '../../../components/user/info/Request';
export default {
  components: {
    UserInfoRequest
  }
};
</script>

<style lang="stylus">
  .user-info-title
    line-height: 40px;
    padding: 0 10px
    background #f3f6f8
    font-size: 15px
  html
    background #f8f8f8
</style>
