<template>
  <div>
    <van-row>
      <van-col v-for="( product, index ) of goodsList" :key="index" span="12">
        <div class="product" @click="$emit('onClick', product)">
          <div class="img">
            <img :src="product.goods_image" alt="">
          </div>
          <p class="title">
            {{ product.goods_name }}
          </p>
          <p class="price">
            ￥{{ product.goods_promotion_price }}
          </p>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  import Vue from 'vue';
  import {
    Row,
    Col
  } from 'vant'
  Vue.use(Row).use(Col);
  export default {
    props: {
      goodsList: {
        type: Array
      }
    }
  }
</script>

<style scoped lang="stylus">
  .product
    padding: 10px
    .img
      width: 100%
      height: 100%
    img
      width: 100%
    .title
      padding: 5px 0
      line-height: 20px
      text-overflow:ellipsis
      overflow:hidden
      white-space:nowrap
    .price
      line-height: 24px
      color #ff441f
</style>
