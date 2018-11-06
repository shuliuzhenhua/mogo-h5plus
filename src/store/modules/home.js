import { GET_HOME_DATA } from '../mutations_type';
import http from '../../utils/http';
const state = {
  banner: [],
  theme: [],
  products: {},
};

const actions = {
  getHomeData({ commit }) {
    http.get('mall').then(res => {
      commit(GET_HOME_DATA, {
        data: res.data,
      });
    });
  },
};

const mutations = {
  [GET_HOME_DATA](state, payload) {
    const data = payload.data;
    state.banner = data.banner;
    state.theme = data.theme;
    state.products = data.products;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
