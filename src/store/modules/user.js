import { GET_USER_INFO, GET_ORDER_STATUS_COUNT } from '../mutations_type';
import http from '../../utils/http';

const state = {
  userInfo: {},
  statusCount: {},
};

const actions = {
  getUserInfo({ commit }) {
    http.get('user/self').then(res => {
      commit(GET_USER_INFO, {
        data: res.data,
      });
    });
  },
  getOrderStatusCount({ commit }) {
    http.get('mall/order/count').then(res => {
      commit(GET_ORDER_STATUS_COUNT, {
        data: res.data,
      });
    });
  },
};

const mutations = {
  [GET_USER_INFO](state, payload) {
    state.userInfo = payload.data;
  },
  [GET_ORDER_STATUS_COUNT](state, payload) {
    state.statusCount = payload.data;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
