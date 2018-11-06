<template>
  <div>
    <van-nav-bar v-bind:class="{ active: isActive }" title="设置密码" right-text="完成" @click-left="$close()" @click-right="onClickRight" left-arrow />
    <van-cell-group>
      <van-field v-model="password" type="password" placeholder="输入新的密码" class="password" />
      <van-field v-model="confirmPwd" type="password" placeholder="再次输入密码" />
    </van-cell-group>

    <div class="desc">6-16位密码、数字、或字母</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: '',
      confirmPwd: '',
      isActive: false,
    };
  },
  watch: {
    password() {
      this.isActive = this.password === this.confirmPwd && this.password.length >= 6;
    },
    confirmPwd() {
      this.isActive = this.password === this.confirmPwd && this.password.length >= 6;
    },
  },
  methods: {
    onClickRight() {
      this.$http
        .post('user/update_pwd', {
          password: this.password,
          confirmPwd: this.confirmPwd,
        })
        .then(() => {
          this.$close();
        });
    },
  },
};
</script>

<style lang="stylus">
.van-nav-bar__text {
  color: #7c7c7c;
}

.active {
  .van-nav-bar__text {
    color: red;
  }
}

html {
  background: #f8f8f8;

  .password {
    margin-top: 20px;
  }

  .desc {
    padding: 20px 15px;
    color: gray;
  }
}
</style>
