import Vue from 'vue';
import { SwipeItem, CellGroup, Cell, Button, Swipe, Icon, Lazyload } from 'vant';
Vue.use(SwipeItem).use(CellGroup).use(Cell).use(Button).use(Swipe).use(Icon).use(Lazyload);

import {Goods} from './plugin/index';
Vue.use(Goods);
