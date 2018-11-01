import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import { GET_GOODS_DETAIL } from './mutations_type'
import http from '@/utils/http';

const state = {
  banner: [],
  mainImg: '',
  info: {
    title: '',
    desc: '',
    price: '',
    min_price: '',
    max_price: ''
  },
  content: '',
  sku: {
    sku: '',
    goods: '',
    goodsId: '',
    hideStock: false
  }
};

const actions = {
  getGoodsDetail ({ commit }, payload) {
    http.get({
      url: '/mall/goods/' + payload.goodsId
    }).then(res => {
      commit(GET_GOODS_DETAIL, {
        data: res.data
      })
    })
  }
};

const mutations = {
  [GET_GOODS_DETAIL] (state, payload) {
    const data = payload.data;
    console.log(data);
    state.banner = data.picture;

    state.mainImg = data.main_img;

    state.info = {
      title: data.title,
      desc: data.desc,
      price: data.price,
      min_price: data.min_price,
      max_price: data.max_price
    };

    state.content = data.content;

    state.sku = {
      sku: data.sku,
      goods: data.goods,
      goodsId: data.goodsId,
      hideStock: data.sku.hide_stock
    };
  }
};

const getters = {
  goodsInfo (state) {
    let info = state.info;
    if (state.sku.none_sku) {
      info.price = '￥' + info.price;
    } else {
      info.price =  '￥' + info.min_price + ' - ' + '￥' + info.max_price
    }
    return info;
  }
};

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
});
