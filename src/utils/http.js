import axios from 'axios';
import { Dialog } from 'vant';
import { Config } from '../config';

axios.defaults.baseURL = Config.restUrl;
axios.defaults.timeout = 30 * 1000;

const instance = axios.create();

/**
 * 请求拦截器
 */
instance.interceptors.request.use(config => {
  config.headers = {
    token: localStorage.getItem('token'), // 设置header 默认值，根据自己情况而定
  };
  return config;
});

/**
 * 返回拦截器
 */
instance.interceptors.response.use(
  res => {
    return Promise.resolve(res.data);
  },
  err => {
    if (err.config.handle) {
      return Promise.reject(err.response.data);
    }

    if (err.response.data.error_code === 10003) {
      alert('需要重新登录');
      return Promise.reject(err.response.data);
    }
    /**
     * 错误弹窗，和返回异常是异步进行的
     */
    Dialog.alert({
      message: err.response.data.msg,
    });
    return Promise.reject(err.response.data);
  }
);

const http = {
  async request(options) {
    return await instance(options);
  },
  async get(url, params) {
    return await instance.get(url, { params });
  },
  async post(url, data) {
    return await instance.get(url, data);
  },
  async put(url, data) {
    return await instance.put(url, data);
  },
  async delete(url, data) {
    return await instance.delete(url, data);
  },
};

export default http;
