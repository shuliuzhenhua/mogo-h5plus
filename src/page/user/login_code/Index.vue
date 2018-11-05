<template>
  <div>
    <van-nav-bar left-arrow @click-left="$hide()" />

    <div class="content">
      <login-code-content :mobile="mobile" />
      <login-code-request :mobile="mobile" />
      <login-code-footer :mobile="mobile" />
    </div>
  </div>
</template>

<script>
import LoginCodeContent from '../../../components/user/login_code/Content';
import LoginCodeRequest from '../../../components/user/login_code/Request';
import LoginCodeFooter from '../../../components/user/login_code/Footer';

export default {
  data() {
    return {
      mobile: '',
    };
  },
  components: {
    LoginCodeContent,
    LoginCodeRequest,
    LoginCodeFooter,
  },
  created() {
    this.mobile = this.$current().mobile;
    this.$http.get({
      url: '../send_code',
      params: {
        mobile: this.mobile,
      },
    });
  },
};
</script>

<style scoped lang="stylus">
.content {
  width: 320px;
  margin: 0 auto;
}
</style>
