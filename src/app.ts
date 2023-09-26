import { RequestConfig, history } from '@umijs/max';
import { message } from 'antd';
import { getApiDomain } from './utils';
import 'animate.css';

message.config({
  maxCount: 1,
  top: 150,
  duration: 2,
  prefixCls: 'custom-message',
});

// 注册、登录和找回密码不用消费token
const ignoredUrl = ['api/auth/signUp', 'api/auth/login', 'api/auth/findpwd'];

let cancelFlag: boolean = false;

export const request: RequestConfig = {
  timeout: 10000,
  errorConfig: {
    errorHandler: (error: any, opts: any) => {
      if (opts?.skipErrorHandler) throw error;
      if (
        error.code === 'ECONNABORTED' ||
        error.code === 'ERR_NETWORK' ||
        error.code === 'ERR_BAD_REQUEST'
      ) {
        message.error('网络异常,请稍后再试');
      }
      if (error?.response?.status === 500) {
        message.error('系统异常,请稍后再试');
      }
    },
  },
  requestInterceptors: [
    (url, options) => {
      if (!ignoredUrl.includes(url)) {
        options.headers.token = window.localStorage.getItem('token');
      }
      const apiUrl = getApiDomain() + url;
      options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
      if (options.method === 'post') {
        options.data = JSON.stringify(options.data);
      }
      return { url: apiUrl, options };
    },
  ],
  responseInterceptors: [
    (response: any) => {
      const { data } = response;

      if (data?.status !== 0 && data?.msg) {
        message.error(data.msg);
      }
      if (data?.status === 401) {
        if (cancelFlag) return;
        cancelFlag = true;
        localStorage.removeItem('token');
        setTimeout(() => {
          history.push('/home?login=true', {
            pathname: location.pathname,
            search: location.search,
          });
          setTimeout(() => {
            cancelFlag = false;
          }, 1000);
        }, 200);
      }
      return response;
    },
  ],
};
