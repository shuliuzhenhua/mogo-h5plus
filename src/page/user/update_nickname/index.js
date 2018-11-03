// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import "@/utils/common";
import 'styles/reset.css';
import 'styles/iconfont.css';
import http from '@/utils/http';
import './plugin.js';
import { close, current, fire } from "../../../utils/view";
import App from "./Index.vue";

Vue.config.productionTip = false;
Vue.prototype.$http = http;
Vue.prototype.$close = close;
Vue.prototype.$current = current;
Vue.prototype.$fire = fire;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App)
});
