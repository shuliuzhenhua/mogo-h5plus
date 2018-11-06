// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import '@/utils/common';
import 'styles/reset.css';
import 'styles/iconfont.css';
import store from './store';
import './plugin.js';
import App from './Index.vue';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App),
});