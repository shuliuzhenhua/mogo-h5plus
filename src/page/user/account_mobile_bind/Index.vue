<template>
  <div>
    <van-nav-bar v-bind:class="{ active: isActive }" title="绑定手机号" right-text="下一步" @click-left="$close()" @click-right="onClickRight" left-arrow />
    <div class="title">绑定手机号后可以使用更多功能</div>
    <van-cell-group>
      <van-field type="tel" placeholder="请输入手机号" v-model="mobile" />
    </van-cell-group>
  </div>
</template>

<script>
import validate from './validate';
export default {
  data() {
    return {
      mobile: '',
      lastMobile: '',
      isActive: false,
    };
  },
  watch: {
    mobile() {
      if (this.mobile.length === 11) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    },
  },
  methods: {
    onClickRight() {
      if (this.isActive) {
        validate(this.$data).then(() => {
          if (this.mobile === this.lastMobile) {
            this.$open('user.account_mobile_bind_confirm', {}, { mobile: this.mobile });
          } else {
            this.lastMobile = this.mobile;
            this.$close('user.account_mobile_bind_confirm', 'none');
            setTimeout(() => {
              this.$open('user.account_mobile_bind_confirm', {}, { mobile: this.mobile });
            }, 300);
          }
        });
      }
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

  .title {
    line-height: 40px;
    padding: 0 10px;
    background: #f3f6f8;
    font-size: 15px;
  }
}
</style>
