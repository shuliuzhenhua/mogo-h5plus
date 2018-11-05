<template>
  <div>
    <van-nav-bar left-arrow title="意见反馈" @click-left="$close()" />
    <feedback-request></feedback-request>
  </div>
</template>

<script>
import FeedbackRequest from '@/components/system/feedback/Request';
export default {
  components: {
    FeedbackRequest,
  },
};
</script>

<style lang="stylus">
html {
  background: #f8f8f8;
}
</style>
