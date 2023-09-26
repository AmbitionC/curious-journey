import { defineConfig } from '@umijs/max';

export default defineConfig({
  title: 'curious-journey',
  metas: [
    {
      name: 'keywords',
      content: 'curious-journey',
    },
    {
      name: 'description',
      content: '小陈的个人网站',
    },
  ],
  links: [
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
  ],
  antd: {},
  model: {},
  request: {},
  theme: {},
  hash: true,
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
  ],
  history: {
    type: 'browser',
  },
  npmClient: 'pnpm',
  tailwindcss: {},
});

