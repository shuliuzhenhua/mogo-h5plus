<template>
  <div class="home">
    <shop-banner :banner="banner" />
    <shop-theme :theme="theme" @onClick="handleGoodsClick"/>
    <shop-products :products="products" @onClick="handleGoodsClick" @toMore="handleMoreClick"/>
    <div class="cart" @click="toCart">
      <van-icon name="cart"></van-icon>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex';
  import ShopBanner from '../components/shop/Banner'
  import ShopTheme from '../components/shop/Theme'
  import ShopProducts from '../components/shop/Products'
  import { toGoodsDetail } from '../utils/view';
  export default {
    name: 'home',
    components: {
      ShopBanner,
      ShopTheme,
      ShopProducts
    },
    computed: {
      ...mapState('home', [
        'banner',
        'theme',
        'products'
      ])
    },
    created () {
      this.getHomeData();
    },
    methods: {
      ...mapActions('home', [
        'getHomeData'
      ]),
      /**
       * 去商品详情
       * @param goods
       */
      handleGoodsClick (goods) {
        toGoodsDetail(goods.goods_id);
      },
      handleMoreClick() {
        alert('查看更多');
      },
      toCart() {
        alert('去购物车')
      }
    }
  }
</script>

<style scoped lang="stylus">
  .home
    padding-bottom: 50px
    .cart
      position: fixed
      right: 20px
      bottom: 150px
      background black
      line-height: 40px
      width: 40px
      font-size: 20px
      color white
      text-align: center
      border-radius 50%
      opacity:0.8
</style>
