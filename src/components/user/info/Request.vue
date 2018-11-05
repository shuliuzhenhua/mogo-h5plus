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
      <div @click="$open('user.update_nickname', { popGesture: 'close' }, {nickname: userInfo.nickname})">
        <van-col span="5" offset="1" class="gray">修改昵称</van-col>
        <van-col span="16">{{ userInfo.nickname }}</van-col>
        <van-col span="2">
          <van-icon name="arrow" class="gray" />
        </van-col>
      </div>
    </van-row>
    <!--性别-->
    <van-row class="row">
      <div @click="editSex">
        <van-col span="5" offset="1" class="gray">性别</van-col>
        <van-col span="16">{{ userInfo.sex }}</van-col>
        <van-col span="2">
          <van-icon name="arrow" class="gray" />
        </van-col>
      </div>
    </van-row>
    <!--二维码-->
    <van-row class="row">
      <div @click="$open('user.qrcode', { popGesture: 'close' })">
        <van-col span="5" offset="1" class="gray">二维码</van-col>
        <van-col span="15" class="gray">点击查看</van-col>
        <van-col span="1">
          <van-icon name="erweima" class="gray" />
        </van-col>
        <van-col span="2">
          <van-icon name="arrow" class="gray" />
        </van-col>
      </div>

      <van-actionsheet v-model="show" :actions="actions" cancel-text="取消" @select="onSelect" />
    </van-row>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  data() {
    return {
      show: false,
      actions: [{ name: '女' }, { name: '男' }],
    };
  },
  computed: {
    ...mapState(['userInfo']),
  },
  created() {
    this.getUserInfo();
    window.addEventListener('event', event => {
      this.updateName({
        name: event.detail.nickname,
      });
    });
  },
  methods: {
    ...mapActions(['getUserInfo', 'updateAvatar', 'updateName', 'updateSex']),
    editSex() {
      this.show = true;
    },
    onSelect(item) {
      // 点击选项时默认不会关闭菜单，可以手动关闭
      this.show = false;
      this.updateSex({
        sex: item.name,
      });
    },
  },
};
</script>

<style scoped lang="stylus">
.van-icon-erweima {
  font-size: 18px;
}

.row {
  line-height: 45px;
  border-bottom: 2px solid #f8f8f8;
  font-size: 15px;
}

.van-row {
  background: white;
  /* padding: 0 10px */
  width: 375px;
}

.avatar-warp {
  line-height: 80px;
  height: 80px;

  .van-uploader {
    width: 375px;
    padding: 0 10px;
  }

  .img {
    width: 80px;

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }
  }
}

.gray {
  color: gray;
}
</style>
