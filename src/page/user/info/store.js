import Vue from 'vue';
import Vuex from 'vuex';
import http from '@/utils/http';

Vue.use(Vuex);

const state = {
  userInfo: {
    avatar: '',
    sex: 'null',
    nickname: 'null'
  }
};

const actions = {
  /**
   * 取得用户资料
   * @param commit
   */
  getUserInfo ({ commit }) {
    http.get({
      url: 'user/self'
    }).then(res => {
      commit('getUserInfo', {
        userInfo: res.data
      })
    })
  },
  updateAvatar({ commit }, file) {
    let data = new FormData();
    data.append('img', file.file);
    http.post({
      url: 'user/header_img',
      data
    }).then(res => {
      commit('updateAvatar', {
        data: res.data
      })
    })
  },
  update({ commit }, payload) {
    http.put({
      url: 'user',
      data: payload
    }).then(res => {
      commit('update', {userInfo : res.data})
    })
  }
};

const mutations = {
  getUserInfo(state, payload) {
    const userInfo = payload.userInfo;
    state.userInfo.avatar = userInfo.header_img;
    state.userInfo.nickname = userInfo.name;
    state.userInfo.sex = userInfo.sex;
  },
  updateAvatar(state, payload) {
    const data = payload.data;
    state.userInfo.avatar= data.url;
  },
  update(state, payload) {
    const userInfo = payload.userInfo;
    state.userInfo.avatar = userInfo.header_img;
    state.userInfo.nickname = userInfo.name;
    state.userInfo.sex = userInfo.sex;
  }
};

const getters = {};

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
});
