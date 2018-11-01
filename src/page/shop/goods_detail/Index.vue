<template>
  <div>
    <goods-action></goods-action>
    <goods-banner :banner="banner"></goods-banner>
    <goods-content></goods-content>
    <goods-info :info="goodsInfo"></goods-info>
    <goods-sku></goods-sku>
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
      GoodsSku
    },
    created() {
      let goodsId = 100007;
      this.getGoodsDetail({ goodsId });
    },
    computed: {
      ...mapState([
        'banner',
        'mainImg',
        'content',
        'sku',
        'hideStock',
      ]),
      ...mapGetters([
        'goodsInfo'
      ])
    },
    methods: {
      ...mapActions([
        'getGoodsDetail'
      ]),
    }
  }
</script>

<style scoped lang="stylus">

</style>
