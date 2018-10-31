import Vue from 'vue';
import Vuex from 'vuex';
import home from './modules/home';
import shop from './modules/shop';
import message from './modules/message';
import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    home,
    shop,
    message,
    user
  },
});
