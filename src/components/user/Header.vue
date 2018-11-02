<template>
  <div class="user_header" :style="{backgroundImage: `url(${background_image})`}">
    <van-icon name="setting" class="user_set" @click="toSetting" />
    <div class="user_avatar" v-if="user_info">
      <img :src="user_info.header_img" @click="toUserInfo" alt="头像" width="55" height="55">
    </div>
    <div>{{user_info.name}}</div>
  </div>
</template>

<script>
import bg_default from "@/assets/images/user_head_bg.png";
import { open } from "../../utils/view";

export default {
  data(){
    return {
      background_image: bg_default
    }
  },
  props: {
    user_info: {
      type: Object
    }
  },
  methods: {
    toSetting () {
      open('system.setting', { popGesture: 'close' })
    },
    toUserInfo () {
      alert('去用户信息页面')
    }
  }
}

</script>

<style lang="stylus" scoped>
  .user_header >>> .user_set
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
  .user_header {
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    height: 130px;
    box-sizing: border-box;
    text-align: center;
    color: #fff;
    padding-top: 30px;
  }
  .user_avatar{
    margin-bottom: 10px;
    img{
      border: 0;
      border-radius: 50%;
    }
  }

</style>
