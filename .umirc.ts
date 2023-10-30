import { defineConfig } from '@umijs/max';

export default defineConfig({
  title: 'curious-journey',
  favicons: ['/favicon.ico'],
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
      redirect: '/homepage',
    },
    {
      name: '首页',
      path: '/homepage',
      component: './Homepage',
    },
    {
      name: '博客',
      path: '/blogs',
      component: './Blogs',
    },
    {
      name: '博客内容',
      path: '/blogContent',
      component: './BlogContent',
    },
    {
      name: '关于',
      path: '/about',
      component: './About',
    },
    {
      name: '演讲',
      path: '/talks',
      component: './Talks',
    },
    {
      name: '论文',
      path: '/publications',
      component: './Publications'
    },
    {
      name: '产品',
      path: '/works',
      component: './Works',
    }
  ],
  history: {
    type: 'browser',
  },
  npmClient: 'pnpm',
  tailwindcss: {},
});
