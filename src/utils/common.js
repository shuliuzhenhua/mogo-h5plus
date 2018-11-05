import Vue from 'vue';
import http from './http';
/**
 * 该js为所有页面都必须加载的js
 * 可以用于全局添加某功能
 */
import FastClick from 'fastclick';
// 去除300ms延迟
document.addEventListener(
  'DOMContentLoaded',
  function() {
    FastClick.attach(document.body);
  },
  false
);

/**
 * h5+ 窗口管理
 */
import { open, show, current, close, hide, fire, launch } from './view';
Vue.prototype.$open = open;
Vue.prototype.$show = show;
Vue.prototype.$current = current;
Vue.prototype.$close = close;
Vue.prototype.$hide = hide;
Vue.prototype.$fire = fire;
Vue.prototype.$launch = launch;

/**
 * http 请求
 */
Vue.prototype.$http = http;
