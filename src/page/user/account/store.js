import Vue from 'vue';
import Vuex from 'vuex';
import http from '@/utils/http';

Vue.use(Vuex);

const state = {
  mobile: '',
  password: '',
  wechat: ''
};

const actions = {
  /**
   * 取得用户账号安全信息
   * @param commit
   */
  getUserAccount ({ commit }) {
    http.get({
      url: 'user/account'
    }).then(res => {
      commit('getUserAccount', {
        account: res.data
      })
    })
  }
};

const mutations = {
  getUserAccount(state, payload) {
    const account = payload.account;
    state.mobile = account.mobile;
    state.password = account.password;
    state.wechat = account.wechat;
  }
};

const getters = {};

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
});
