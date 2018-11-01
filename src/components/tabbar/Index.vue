<template>
  <div>
    <van-tabbar v-model="active" style="z-index: 1999">
      <van-tabbar-item
        v-for="(tab, index) in tabs"
        :icon="tab.icon"
        :to="tab.path"
        :dot="tab.dot"
        :info="tab.info"
        :key="index">
        {{tab.name}}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem } from 'vant';
  export default {
    data () {
      return {
        active: 0,
        tabs: [
          {
            name: "首页",
            path: "/",
            pathName: "home",
            icon: "wap-home",
            dot: false,
            info: ""
          },
          {
            name: "商城",
            path: "/shop",
            pathName: "shop",
            icon: "shop",
            dot: false,
            info: ""
          },
          {
            name: "信息",
            path: "/message",
            pathName: "message",
            icon: "chat",
            dot: false,
            info: ""
          },
          {
            name: "我的",
            path: "/user",
            pathName: "user",
            icon: "contact",
            dot: false,
            info: ""
          }
        ]
      }
    },
    components:{
      [Tabbar.name]: Tabbar,
      [TabbarItem.name]: TabbarItem,
    },
    watch: {
      '$route': 'changeActive'
    },
    created () {
      const toName = this.$route.name;
      this.setActive(toName)
    },
    methods: {
      changeActive({ name }){
        this.setActive(name)
      },
      setActive(name){
        this.tabs.forEach((tab, i) => {
          if(tab.pathName === name){
            this.active = i;
            return false;
          }
        })
      }
    },
  }
</script>

<style scoped lang="stylus">

</style>
