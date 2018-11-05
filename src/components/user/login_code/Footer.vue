<template>
  <van-row type="flex" justify="space-between" class="footer">
    <van-col span="8">
      <div v-show="isSend" class="noSend">{{content}}</div>
      <div v-show="!isSend" class="send" @click="sendSms">重新发送</div>
    </van-col>
    <van-col span="6">
      <div @click="passwordLogin">密码登录</div>
    </van-col>
  </van-row>
</template>

<script>
export default {
  props: {
    mobile: {
      type: String,
    },
  },
  data() {
    return {
      isSend: true,
      content: '60 秒后重新发送',
    };
  },
  created() {
    this.timeInit();
  },
  methods: {
    timeInit() {
      let second = 60;
      const timer = setInterval(() => {
        second--;
        if (second) {
          this.content = `${second} 秒重新发送`;
        } else {
          this.isSend = false;
          clearInterval(timer);
        }
      }, 1000);
    },
    sendSms() {
      this.isSend = true;
      this.$http
        .get({
          url: '../send_code',
          params: {
            mobile: this.mobile,
          },
        })
        .then(res => {
          this.timeInit();
          this.$toast(res.msg);
        })
        .catch(() => {
          this.timeInit();
        });
    },
    passwordLogin() {
      alert('密码登录');
    },
  },
};
</script>

<style scoped lang="stylus">
.footer {
  color: rgba(47, 105, 255, 0.89);

  .noSend {
    color: #6c6c6c;
  }
}
</style>
