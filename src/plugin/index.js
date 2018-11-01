import goods from './Goods';
import vcode from './Vcode';

export const Goods = {
  install: function(Vue) {
    Vue.component('Goods', goods);
  },
};

export const Vcode = {
  install: function(Vue) {
    Vue.component('Vcode', vcode);
  },
};
