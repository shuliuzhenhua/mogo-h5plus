<template>
    <div>
      <van-nav-bar
        v-bind:class="{ active: isActive }"
        title="输入验证码"
        right-text="确认"
        @click-left="$close()"
        @click-right="onClickRight"
        left-arrow
      />
      <div class="title">短信验证码已发送至 {{ mobile }}，请填写验证码</div>

      <van-cell-group>
        <van-field
          v-model="code"
          center
          clearable
          label="短信验证码"
          placeholder="请输入短信验证码"
          type="number"
        >
          <van-button slot="button" size="small" disabled v-if="isSend">{{ content }}</van-button>
          <van-button slot="button" size="small" type="danger" @click="sendSms" v-else>发送验证码</van-button>
        </van-field>
      </van-cell-group>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  data () {
    return {
      isActive: false,
      code: ''
    }
  },
  computed: {
    ...mapState(['isSend', 'content', 'mobile'])
  },
  watch: {
    code() {
      if (this.code.length === 4) {
        this.isActive = true
      } else {
        this.isActive = false
      }
    }
  },
  created() {
    this.getMobile();
    this.timeInit()
  },
  methods: {
    ...mapActions(['timeInit', 'sendSms', 'getMobile']),
    onClickRight() {
      if (this.isActive) {
        let data = {
          mobile: this.mobile,
          code: this.code
        };
        this.$http.post({
          url: 'user/bind_mobile',
          data
        }).then(() => {
          this.$fire('user.account', { mobile: this.mobile }, 'mobileEvent');
        })
      }
    }
  }
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
