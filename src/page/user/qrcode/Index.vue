<template>
    <div>
      <!--返回箭头-->
      <van-icon name="arrow-left" @click="$close()" />
      <!--内容主体-->
      <div class="content">
        <div class="avatar">
          <img :src="userInfo.avatar" alt="">
        </div>
        <div class="nickname">
          {{ userInfo.nickname }}
        </div>
        <vue-qr class="code" :text="code"></vue-qr>
      </div>
    </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';
import VueQr from 'vue-qr'
export default {
  computed: {
    ...mapState(['userInfo']),
    ...mapGetters(['code'])
  },
  components: {
    VueQr
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    ...mapActions(['getUserInfo'])
  }
};
</script>

<style lang="stylus">
  .van-icon-arrow-left
    color black
    left 12px;
    top: 20px
    font-size: 20px
  html
    background-image url('../../../assets/images/qrcode_bg.jpg')
    background-size:100%100%;
    .content
      width: 80%
      height: 400px
      position: relative
      background white
      margin: 130px auto 0
      box-shadow: 0 20px 20px rgba(0,0,0,.2);
      text-align: center
      .avatar
        width: 100px
        height: 100px
        margin: 0 auto
        img
          width: 100%
          height: 100%
          border-radius 50%
          margin-top: -30px
       .nickname
         margin-top: -20px
    .code
      margin-top: 40px;
</style>
