import axios from 'axios';
import { Dialog } from 'vant';
import { Config } from '../config';

axios.defaults.baseURL = Config.restUrl;
axios.defaults.timeout = 30 * 1000;

const Http = {
  request(options) {
    return new Promise((resolve, reject) => {
      // 创建实例
      const instance = axios.create({
        headers: {
          token: localStorage.getItem('token'), // 设置header 默认值，根据自己情况而定
        },
      });
      instance.interceptors.response.use(
        res => {
          // 请求成功时的处理
          return res;
        },
        err => {
          // 1、绕过拦截器，完全自己处理
          if (options.handle === true) {
            return Promise.reject(err);
          }
          console.log(JSON.stringify(err.response, null, 4));
          // 如果返回的是自己网站的错误应该是有这个data的
          if (err.response.data) {
            // 2、特殊异常，当检测到时采取对应的操作，例如这个表示一定要先登录才可以使用
            if (err.response.data.error_code === 10003) {
              // 需要重新登录

              alert('需要重新登录');
              // global.$router.push({
              //   name: 'login',
              //   query: {
              //     redirect: global.$route.name,
              //   },
              // });
              return Promise.reject(err);
            }
            // 3、普通异常，比如参数错误或者其他，直接弹出错误就可以的
            // 这里可以用一个弹出提示
            Dialog.alert({
              message: err.response.data.msg,
            });
          }
          // 请求失败时的处理
          return Promise.reject(err);
        }
      );
      instance
        .request(options)
        .then(res => {
          return resolve(res.data); // 直接放回的是后台返回的数据
        })
        .catch(err => {
          return reject(err);
        });
    });
  },
  post(options) {
    options.method = 'post';
    return new Promise((resolve, reject) => {
      this.request(options)
        .then(resolve)
        .catch(reject);
    });
  },
  delete(options) {
    options.method = 'delete';
    return new Promise((resolve, reject) => {
      this.request(options)
        .then(resolve)
        .catch(reject);
    });
  },
  get(options) {
    return new Promise((resolve, reject) => {
      this.request(options)
        .then(resolve)
        .catch(reject);
    });
  },
  put(options) {
    options.method = 'put';
    return new Promise((resolve, reject) => {
      this.request(options)
        .then(resolve)
        .catch(reject);
    });
  },
};
export default Http;
