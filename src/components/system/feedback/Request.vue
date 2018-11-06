<template>
  <div class="request">
    <van-field v-model="content" type="textarea" placeholder="请留下您的宝贵建议" rows="1" autosize />

    <div class="btn">
      <van-button class="disabled" disabled size="large" v-if="!content">提交</van-button>
      <van-button type="danger" size="large" @click="handleButClick" v-else>提交</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: '',
    };
  },
  methods: {
    handleButClick() {
      this.$http.post('feedback', { content: this.content }).then(res => {
        this.$toast(res.msg);
        setTimeout(() => {
          this.$close();
        }, 1500);
      });
    },
  },
};
</script>

<style lang="stylus">
@import '~styles/theme.styl';

setDisabled();

html {
  background: #f8f8f8;

  .request {
    padding: 10px;
  }

  .van-button {
    border-radius: 10px;
  }

  .btn {
    margin-top: 30px;
  }
}
</style>
