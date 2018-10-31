import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const Home = () => import('./page/Home.vue');
const Shop = () => import('./page/Shop.vue');
const Message = () => import('./page/Message.vue');
const User = () => import('./page/User.vue');
const Tabbar = () => import('./components/tabbar.vue');

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        default: Home,
        tabbar: Tabbar,
      },
      meta: {
        keepAlive: true
      }
    },
    {
      path: "/shop",
      name: "shop",
      components: {
        default: Shop,
        tabbar: Tabbar,
      },
      meta: {
        keepAlive: true
      }
    },
    {
      path: "/message",
      name: "message",
      components: {
        default: Message,
        tabbar: Tabbar,
      },
      meta: {
        keepAlive: true
      }
    },
    {
      path: "/user",
      name: "user",
      components: {
        default: User,
        tabbar: Tabbar,
      },
      meta: {
        keepAlive: true
      }
    },

  ]
})
