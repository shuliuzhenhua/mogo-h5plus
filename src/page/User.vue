<template>
  <div class="my">
    <user-header :user_info="userInfo"></user-header>
    <user-order :statusCount="statusCount"></user-order>
    <user-modules></user-modules>
    <div class="about">
      <p>© 2017 - 2018</p>
      <p>piaopiaopay.com 版权所有</p>
    </div>
  </div>
</template>

<script>
  import userHeader from '../components/user/Header'
  import userOrder from '../components/user/Order'
  import userModules from '../components/user/Modules'
  import { mapActions, mapState } from 'vuex';
  export default {
    components: {
      userHeader,
      userOrder,
      userModules
    },
    created () {
      if (this.isLogin) {
        this.getUserInfo();
        this.getOrderStatusCount();
      }
    },
    computed: {
      ...mapState('user', ['isLogin', 'userInfo', 'statusCount'])
    },
    methods: {
      ...mapActions('user', [
        'getUserInfo',
        'getOrderStatusCount'

      ])
    }
  }
</script>

<style scoped lang="stylus">
  .about
    padding-top: 50px
    line-height: 20px
    text-align: center
    color #cccccc
</style>
