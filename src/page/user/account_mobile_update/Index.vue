<template>
    <div>
      <van-nav-bar
        v-bind:class="{ active: isActive }"
        title="更换手机号"
        right-text="下一步"
        @click-left="$close()"
        @click-right="onClickRight"
        left-arrow
      />
      <div class="title">你的账号目前绑定的手机号是 {{ currentMobile }}，请输入你希望绑定的手机号</div>
      <van-cell-group>
        <van-field
          type="tel"
          placeholder="请输入手机号"
          v-model="mobile"
        />
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
      currentMobile: '',
      isActive: false,
    };
  },
  watch: {
    mobile() {
      this.isActive = this.code.length === 4 || false;
    },
  },
  created() {
    this.currentMobile = this.$current().mobile;
  },
  methods: {
    onClickRight() {
      if (this.isActive) {
        validate(this.$data).then(() => {
          if (this.mobile === this.lastMobile) {
            this.$open('user.account_mobile_update_confirm', {}, { mobile: this.mobile });
          } else {
            this.lastMobile = this.mobile;
            this.$close('user.account_mobile_update_confirm', 'none');
            setTimeout(() => {
              this.$open('user.account_mobile_update_confirm', {}, { mobile: this.mobile });
            }, 300);
          }
        });
      }
    },
  },
};
</script>

<style lang="stylus">
  .van-nav-bar__text
    color #7c7c7c
  .active
    .van-nav-bar__text
      color red
  html
    background #f8f8f8
    .title
      line-height: 40px;
      padding: 0 10px
      background #f3f6f8
      font-size: 15px
</style>
