<template>
    <div class="request">
      <div class="field van-hairline--bottom">
        <van-field v-model="nickname" placeholder="昵称"/>
      </div>

      <van-button disabled size="large" v-if="!finished">完成</van-button>
      <van-button  size="large" type="danger" v-else @click="submit">完成</van-button>
    </div>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String
    }
  },
  data() {
    return {
      nickname: '',
      finished: false
    }
  },
  watch: {
    nickname () {
      this.finished = this.nickname.length && this.avatar || false
    },
    avatar() {
      this.finished = this.nickname.length && this.avatar || false
    }
  },
  methods: {
    submit () {
      alert(1)
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/theme.styl"
  setDisabled();
  >>> .van-field__control
    height: 40px
    font-size: 20px
  >>> .van-button
    border-radius 10px;
  .request
    padding 0 30px;
    .field
      margin-top: 30px
</style>
