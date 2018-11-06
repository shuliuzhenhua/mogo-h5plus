import Vue from 'vue';
import Vuex from 'vuex';
import http from '@/utils/http';

Vue.use(Vuex);

const state = {
  userInfo: {
    avatar: '',
    nickname: 'null',
    member_no: '',
  },
};

const actions = {
  /**
   * 取得用户资料
   * @param commit
   */
  getUserInfo({ commit }) {
    http.get('user/self').then(res => {
      commit('getUserInfo', {
        userInfo: res.data,
      });
    });
  },
};

const mutations = {
  getUserInfo(state, payload) {
    const userInfo = payload.userInfo;
    state.userInfo.avatar = userInfo.header_img;
    state.userInfo.nickname = userInfo.name;
    state.userInfo.member_no = userInfo.member_no;
  },
};

const getters = {
  code(state) {
    if (state.userInfo.member_no) {
      return '{"type": "INFO","member_no": " ' + state.userInfo.member_no + '"}';
    }
    return '';
  },
};

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
});
