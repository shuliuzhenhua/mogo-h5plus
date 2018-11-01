import goods from './Goods';

export const Goods = {
  install: function(Vue) {
    Vue.component('Goods', goods);
  },
};
