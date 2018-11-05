import AsyncValidator from 'async-validator';
import { Dialog } from 'vant';

// 参数校验
const descriptor = {
  mobile: [
    {
      required: true,
      message: '请填写手机号',
    },
    {
      pattern: /^1[0-9]{10}$|^[569][0-9]{7}$/,
      message: '手机号格式不正确',
    },
  ],
};
const validator = new AsyncValidator(descriptor);

const validatorLast = data => {
  return new Promise(resolve => {
    validator.validate(data, errors => {
      if (errors) {
        Dialog.alert({
          message: errors[0].message,
        });
        return;
      }
      return resolve();
    });
  });
};

export default validatorLast;
