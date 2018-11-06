import Vue from 'vue';
import Vuex from 'vuex';
import http from '@/utils/http';

Vue.use(Vuex);

const state = {
  userInfo: {
    avatar: '',
    sex: 'null',
    nickname: 'null',
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
  updateAvatar({ commit }, file) {
    let data = new FormData();
    data.append('img', file.file);
    http.post('user/header_img', data).then(res => {
      commit('updateAvatar', {
        data: res.data,
      });
    });
  },
  updateName({ commit }, payload) {
    http.put('user/name', payload).then(() => {
      commit('updateName', payload);
    });
  },
  updateSex({ commit }, payload) {
    http.put('user/sex', payload).then(() => {
      commit('updateSex', payload);
    });
  },
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
    state.userInfo.avatar = data.url;
  },
  updateName(state, payload) {
    state.userInfo.nickname = payload.name;
  },
  updateSex(state, payload) {
    state.userInfo.sex = payload.sex;
  },
};

const getters = {};

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
});
