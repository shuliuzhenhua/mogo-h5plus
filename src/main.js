// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import "./utils/common";
import 'styles/iconfont.css';
import 'styles/reset.css'
import store from './store';
import router from './router';
import http from './utils/http';
import './plugin.js';
import App from "./App";

Vue.config.productionTip = false;
Vue.prototype.$http = http;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  store,
  router,
  components: { App },
  template: "<App/>"
});
