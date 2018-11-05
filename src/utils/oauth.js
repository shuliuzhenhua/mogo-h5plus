let auths = {};
export function wechat() {
  return new Promise((resolve, reject) => {
    plus.oauth.getServices((services) => {
      console.log(JSON.stringify(services, null, 4));
      for(let i in services){
        let service=services[i];
        auths[service.id]=service;  // auths['weixin'] = xxxx
        if(service.id === 'weixin') {
          break;
        }
      }

      /**
       * 登录
       */
      let auth=auths['weixin'];

      auth.login(function () {
        return resolve(auth.userInfo); // 直接放回的是后台返回的数据
      }, function(e){
        console.log('登录认证失败');
        return reject(e);
      });
    })
  });
}
