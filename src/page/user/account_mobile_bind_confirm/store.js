import Vue from 'vue';
import Vuex from 'vuex';
import http from '@/utils/http';
import { Toast } from 'vant';
import {current} from "../../../utils/view";

let timer = null;

Vue.use(Vuex);

const state = {
  mobile: '',
  isSend: true,
  content: '60 秒后重新发送'
};

const actions = {
  timeInit({commit}) {
    commit('timeInit')
  },
  sendSms({commit}) {
    commit('sendSms')
  },
  getMobile({commit}) {
    let mobile = current().mobile;
    commit('getMobile', {mobile})
  }
};

const mutations = {
  /**
   * 初始化时间
   * @param state
   */
  timeInit(state) {
    let second = 60;
    clearInterval(timer);
    timer = setInterval(() => {
      second--;
      if (second) {
        state.content = `${second} 秒重新发送`;
      } else {
        state.isSend = false;
        clearInterval(timer);
      }
    }, 1000);
  },
  /**
   * 发送短信
   * @param state
   * @param commit
   */
  sendSms(state, commit) {
    state.isSend = true;
    http
      .get({
        url: '../send_code',
        params: {
          mobile: state.mobile,
        },
      })
      .then(res => {
        clearInterval(timer);
        this.dispatch('timeInit');
        Toast(res.msg);
      })
      .catch(() => {
        this.dispatch('timeInit');
      });
  },
  getMobile(state, payload) {
    state.mobile = payload.mobile
  }
};

const getters = {};

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
});
