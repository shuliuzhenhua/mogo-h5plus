<template>
    <div>
      <van-nav-bar left-arrow  @click-left="$close()" />
      <div class="title">让大家更好地认识你</div>

      <div class="avatar">
        <login-register-add-avatar @update="getAvatar" v-if="!avatar" />
        <login-register-avatar @update="getAvatar" :avatar="avatar" v-else/>
      </div>

      <login-register-request :avatar="avatar"/>

    </div>
</template>

<script>
import LoginRegisterAddAvatar from '../../../components/user/login_register/AddAvatar';
import LoginRegisterAvatar from '../../../components/user/login_register/Avatar';
import LoginRegisterRequest from '../../../components/user/login_register/Request';
export default {
  data() {
    return {
      avatar: ''
    }
  },
  components: {
    LoginRegisterAddAvatar,
    LoginRegisterAvatar,
    LoginRegisterRequest
  },
  methods: {
    getAvatar(content) {
      this.avatar = content;
    }
  }
};
</script>

<style scoped lang="stylus">
  .title
    text-align: center
    font-size: 25px
    font-weight bold
    margin-top: 25px
    margin-bottom: 15px
</style>
