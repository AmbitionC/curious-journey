// @ts-ignore
import qs from 'qs';

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

/**
 * @description 是否为移动端
 * @returns {boolean}
 */
export function isMobile(): boolean {
  return /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
}

/**
 * @description 获取博客内容链接
 * @param {string} ossUrl
 * @returns {string}
 */
export function getBlogsUrl(ossUrl: string): string {
  const regex = /blog-(\d+)/;
  const match = ossUrl.match(regex);
  const blogIndex = match && match[1];
  return `/blogContent?index=${blogIndex}`;
}

/**
 * @description 获取链接入参
 * @returns {string}
 */
export function urlParse() {
  const url = location.href;
  return qs.parse(url.split('?')[1]);
}

