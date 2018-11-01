<template>
  <div class="user-order">
    <van-cell-group>
      <van-cell title="我的订单" value="全部订单" @click="toOrder(0)" isLink>
      </van-cell>
    </van-cell-group>

    <van-row class="order_status">
      <van-col span="8">
        <div  @click="toOrder(1)">
          <div class="order_status_icon">
            <van-icon name="fukuanfangshi" :info="statusCount.noPay" v-if="statusCount.noPay > 0" />
            <van-icon name="fukuanfangshi" v-else />
          </div>
          <div>待付款</div>
        </div>
      </van-col>
      <van-col span="8">
        <div @click="toOrder(2)">
          <div class="order_status_icon">
            <van-icon name="logistics" :info="statusCount.noReceipt" v-if="statusCount.noReceipt > 0" />
            <van-icon name="logistics" v-else />
          </div>
          <div>待收货</div>
        </div>
      </van-col>
      <van-col span="8">
        <div  @click="toOrder(3)">
          <div class="order_status_icon">
            <van-icon name="passed" />
          </div>
          <div>已完成</div>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  props: {
    statusCount: {
      type: Object
    }
  },
  methods: {
    toOrder () {
      alert('去订单页面')
    }
  }
}
</script>

<style scoped lang="stylus">
  .user-order
    padding-top: 10px
    background: #f0f0f0;
    .order_status
      background-color: #fff;
      text-align: center;
      padding: 10px 0;
      font-size: 12px;
      .order_status_icon
        position: relative;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        display: inline-block;
        margin-bottom: 6px
        >>> .van-icon
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate3d(-50%, -50%, 0);
          font-size: 26px;
          color: #000;
          margin-bottom: 15px
</style>
