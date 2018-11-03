<template>
  <div class="form">
    <!--头像-->
    <van-uploader :after-read="updateAvatar">
    <van-row class="avatar-warp van-hairline--top-bottom">
        <van-col span="5" offset="1">
          <div class="img">
            <img :src="userInfo.avatar" alt="">
          </div>
        </van-col>
        <van-col span="16" class="gray">修改头像</van-col>
        <van-col span="2">
          <van-icon name="arrow" class="gray" />
        </van-col>

    </van-row>
    </van-uploader>
    <!--昵称-->
    <van-row class="row nickname">
      <div @click="updateNickname">
        <van-col span="5" offset="1" class="gray">修改名字</van-col>
        <van-col span="16">{{ userInfo.nickname }}</van-col>
        <van-col span="2">
          <van-icon name="arrow" class="gray" />
        </van-col>
      </div>
    </van-row>
    <!--性别-->
    <van-row class="row">
      <div @click="updateSex">
        <van-col span="5" offset="1" class="gray">性别</van-col>
        <van-col span="16">{{ userInfo.sex }}</van-col>
        <van-col span="2">
          <van-icon name="arrow" class="gray" />
        </van-col>
      </div>
    </van-row>
    <!--二维码-->
    <van-row class="row">
      <div @click="toQrCode">
        <van-col span="5" offset="1" class="gray">二维码</van-col>
        <van-col span="15" class="gray">点击查看</van-col>
        <van-col span="1">
          <van-icon name="erweima" class="gray" />
        </van-col>
        <van-col span="2">
          <van-icon name="arrow" class="gray" />
        </van-col>
      </div>
    </van-row>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['userInfo'])
  },
  created() {
    this.getUserInfo();
  },
  methods: {
    ...mapActions(['getUserInfo', 'updateAvatar']),
    updateNickname() {
      alert('改变昵称')
    },
    updateSex() {
      alert('改变性别')
    },
    toQrCode() {
      alert('去看二维码')
    }
  }
}
</script>

<style scoped lang="stylus">
  .van-icon-erweima
    font-size: 18px
  .row
    line-height: 45px;
    border-bottom 2px solid #f8f8f8
    font-size: 15px
  .van-row
    background white;
    /*padding: 0 10px*/
    width: 375px;
  .avatar-warp
    line-height: 80px;
    height: 80px
    .van-uploader
      width: 375px;
      padding: 0 10px
    .img
      width: 80px
      img
        width: 80%
        border-radius 50%
  .gray
    color gray
</style>
