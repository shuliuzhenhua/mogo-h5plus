<template>
    <div>
      <van-nav-bar left-arrow  @click-left="$hide()" />

      <div class="content">
        <login-code-content :mobile="mobile"/>
        <login-code-request :mobile="mobile"/>
        <login-code-footer :mobile="mobile"/>
      </div>
    </div>
</template>

<script>
import LoginCodeContent from '../../../components/user/login_code/Content';
import LoginCodeRequest from '../../../components/user/login_code/Request';
import LoginCodeFooter from '../../../components/user/login_code/Footer';
import validator from './validate';
export default {
  data () {
    return {
      mobile: 0
    }
  },
  components: {
    LoginCodeContent,
    LoginCodeRequest,
    LoginCodeFooter
  },
  created () {
    this.mobile = 15874068303
  }
}
</script>

<style scoped lang="stylus">
  .content
    width: 320px
    margin 0 auto;
</style>
