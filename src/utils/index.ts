/**
 * @description 请求域名映射
 * @returns {string}
 */
export function getApiDomain(): string {
  if (
    location.href.indexOf('localhost') > -1 ||
    location.href.indexOf('127.0.0.1') > -1
  ) {
    return 'http://127.0.0.1:9999/';
  } else if (location.href.indexOf('test.curious-journey.cn') > -1) {
    return '//api.curious-journey.cn/';
  } else {
    return 'https://api.curious-journey.cn/';
  }
}
