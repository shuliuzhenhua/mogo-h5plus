<template>
  <div>
    <!--页面底部-->
    <div class="footer">
      <van-row>
        <!-- 两端对齐 -->
        <van-row type="flex" justify="space-between">
          <van-col span="6">
            <div @click="$close">验证码登录</div>
          </van-col>
          <van-col span="6">
            <div @click="$dialog.alert({message: '忘记密码'})">忘记密码</div>
          </van-col>
        </van-row>
      </van-row>
    </div>

    <div class="text-desc">技术支持: 湖南聚比信息</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="stylus">
.text-desc {
  text-align: center;
  position: absolute;
  bottom: 30px;
  width: 100%;
  color: #404040;
  font-size: 14px;
}

.footer {
  margin-top: 20px;
}

.footer >>> .van-col {
  color: $primaryColor;
  text-align: center;
}
</style>
