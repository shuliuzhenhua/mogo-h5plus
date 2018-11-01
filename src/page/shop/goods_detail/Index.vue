<template>
  <div>
    <goods-banner :banner="banner"></goods-banner>
    <goods-info :info="goodsInfo"></goods-info>

    <van-cell-group>
      <van-cell isLink  v-if="skuName" @click="showSku('all')">
        {{ skuName }}
      </van-cell>
    </van-cell-group>

    <van-sku
      v-model="showBase"
      :sku="sku.sku"
      :goods="sku.goods"
      :goods-id="sku.goodsId"
      :hide-stock="sku.hideStock"
      @buy-clicked="onBuy"
      @add-cart="onAddCart"
      ref="sku"
    >

      <van-button
        type="danger"
        size="large"
        slot="sku-actions"
        v-if="type === 'add'"
        @click="onAddCart"
      >下一步</van-button>

      <van-button
        type="danger"
        size="large"
        slot="sku-actions"
        v-if="type === 'buy'"
        @click="onBuy"
      >下一步</van-button>

    </van-sku>

    <goods-content></goods-content>
    <goods-action @showSku="showSku"></goods-action>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';
import GoodsAction from '@/components/shop/goods_detail/Action';
import GoodsBanner from '@/components/shop/goods_detail/Banner';
import GoodsContent from '@/components/shop/goods_detail/Content';
import GoodsInfo from '@/components/shop/goods_detail/Info';
import GoodsSku from '@/components/shop/goods_detail/Sku';
export default {
  name: 'goods',
  components: {
    GoodsAction,
    GoodsBanner,
    GoodsContent,
    GoodsInfo,
    GoodsSku,
  },
  data() {
    return {
      showBase: false,
      type: 'all',
    };
  },
  created() {
    let goodsId = 100007;
    this.getGoodsDetail({ goodsId });
  },
  computed: {
    ...mapState(['banner', 'mainImg', 'content', 'sku', 'hideStock']),
    ...mapGetters(['goodsInfo', 'skuName']),
  },
  methods: {
    ...mapActions(['getGoodsDetail']),
    showSku(type) {
      this.type = type;
      this.showBase = true;
    },
    onBuy() {
      alert('购买');
    },
    onAddCart() {
      alert('添加至购物车');
    },
  },
};
</script>

<style scoped lang="stylus">

</style>
