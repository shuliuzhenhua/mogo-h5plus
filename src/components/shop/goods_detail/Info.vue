<template>
  <van-cell-group>
    <van-cell>
      <p class="title">{{ info.title }}</p>
      <p class="desc">{{ info.desc }}</p>
      <p class="price">{{ info.price }}</p>
    </van-cell>
  </van-cell-group>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
    },
  },
  watch: {
    info() {},
  },
};
</script>

<style scoped lang="stylus">
.title {
  font-size: 18px;
}

.desc {
  color: #c8c7c7;
  font-size: 14px;
}

.price {
  font-size: 20px;
  line-height: 24px;
  color: red;
}
</style>
