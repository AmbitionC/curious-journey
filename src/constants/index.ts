/**
 * @description 外链
 */
export const SOCIAL_LINKS = [
  {
    link: 'https://github.com/AmbitionC',
    name: 'github',
    svgPath: 'M512 12.64c-282.752 0-512 229.216-512 512 0 226.208 146.72 418.144 350.144 485.824 25.6 4.736 35.008-11.104 35.008-24.64 0-12.192-0.48-52.544-0.704-95.328-142.464 30.976-172.512-60.416-172.512-60.416-23.296-59.168-56.832-74.912-56.832-74.912-46.464-31.776 3.52-31.136 3.52-31.136 51.392 3.616 78.464 52.768 78.464 52.768 45.664 78.272 119.776 55.648 148.992 42.56 4.576-33.088 17.856-55.68 32.512-68.48-113.728-12.928-233.28-56.864-233.28-253.024 0-55.904 20-101.568 52.768-137.44-5.312-12.896-22.848-64.96 4.96-135.488 0 0 43.008-13.76 140.832 52.48 40.832-11.36 84.64-17.024 128.16-17.248 43.488 0.192 87.328 5.888 128.256 17.248 97.728-66.24 140.64-52.48 140.64-52.48 27.872 70.528 10.336 122.592 5.024 135.488 32.832 35.84 52.704 81.536 52.704 137.44 0 196.64-119.776 239.936-233.792 252.64 18.368 15.904 34.72 47.04 34.72 94.816 0 68.512-0.608 123.648-0.608 140.512 0 13.632 9.216 29.6 35.168 24.576 203.328-67.776 349.856-259.616 349.856-485.76 0-282.784-229.248-512-512-512z',
    title: 'Github',
  },
  {
    link: 'https://www.zhihu.com/people/chen-hao-666',
    name: 'zhihu',
    svgPath: 'M544.949 561.422s0-71.387-34.779-75.050c-34.779-3.663-142.775 0-142.775 0v-219.654h161.078s-1.83-73.219-32.949-73.219h-261.755l43.93-117.148s-65.897 3.663-89.692 45.761-98.844 252.604-98.844 252.604 25.627 10.983 67.726-20.134c42.101-31.116 56.743-86.033 56.743-86.033l76.879-3.663 1.83 223.316s-133.621-1.83-161.078 0c-27.457 1.83-42.101 75.050-42.101 75.050h203.182s-18.307 124.47-69.557 214.164c-53.085 89.692-151.929 161.078-151.929 161.078s71.387 29.287 140.947-10.983c69.557-42.101 120.811-223.316 120.811-223.316l162.912 203.182s14.643-97.013-1.83-124.47c-18.307-27.457-113.49-137.283-113.49-137.283l-42.101 36.607 29.287-120.811h177.552zM587.050 188.010l-1.83 660.793h65.897l23.795 82.37 115.321-82.37h162.912v-660.793h-366.091zM879.92 775.584h-76.879l-97.013 75.050-21.965-75.050h-20.134v-512.527h215.991v512.527z',
    title: '知乎',
  },
  {
    link: '/',
    name: 'rss',
    svgPath: 'M128 768a128 128 0 1 0 0 256 128 128 0 0 0 0-256zM0 368v176c265.104 0 480 214.912 480 480h176c0-362.32-293.696-656-656-656zM0 0v176c468.336 0 848 379.664 848 848h176C1024 458.464 565.536 0 0 0z',
    title: 'RSS',
  }
];

/**
 * @description 导航栏文本与菜单
 */
export const NAV_LIST = [
  {
    text: 'HomePage',
    to: '/homepage',
  },
  {
    text: 'About',
    to: '/about',
  },
  {
    text: 'Blogs',
    to: '/blogs',
  },
  {
    text: 'Talks',
    to: '/talks',
  },
  {
    text: 'Publications',
    to: '/publications',
  },
];

// markdown文档OSS文件资源地址
// TODO：用后端接口维护
export const OSS_RESOURCES = {
  about: 'https://ambitionc-blog.oss-cn-hongkong.aliyuncs.com/about/about.md',
  talks: 'https://ambitionc-blog.oss-cn-hongkong.aliyuncs.com/talks/talks.md',
  publications: 'https://ambitionc-blog.oss-cn-hongkong.aliyuncs.com/publications/publications.md',
  blogs: [
    {
      date: '2019-05-18',
      tags: ['JavaScript'],
      title: 'JavaScript中的数据结构',
      link: 'https://ambitionc-blog.oss-cn-hongkong.aliyuncs.com/blogs/blog-1.md',
      isOnHomepage: false,
    },
    {
      date: '2019-05-20',
      tags: ['CSS'],
      title: '深入理解BFC与IFC',
      link: 'https://ambitionc-blog.oss-cn-hongkong.aliyuncs.com/blogs/blog-2.md',
      isOnHomepage: false,
    },
    {
      date: '2019-07-19',
      tags: ['JavaScript'],
      title: 'Javascript中的作用域',
      link: 'https://ambitionc-blog.oss-cn-hongkong.aliyuncs.com/blogs/blog-3.md',
      isOnHomepage: false,
    },
    {
      date: '2019-07-21',
      tags: ['JavaScript', 'Promise'],
      title: '详解Promise',
      link: 'https://ambitionc-blog.oss-cn-hongkong.aliyuncs.com/blogs/blog-4.md',
      isOnHomepage: false,
    },
    {
      date: '2019-08-11',
      tags: ['Algorithm', 'Competition'],
      title: '天池医疗辅助治疗糖尿病AI大赛（上）',
      link: 'https://ambitionc-blog.oss-cn-hongkong.aliyuncs.com/blogs/blog-5.md',
      isOnHomepage: false,
    },
    {
      date: '2019-08-11',
      tags: ['Algorithm', 'Competition'],
      title: '天池医疗辅助治疗糖尿病AI大赛（下）',
      link: 'https://ambitionc-blog.oss-cn-hongkong.aliyuncs.com/blogs/blog-6.md',
      isOnHomepage: false,
    },
    {
      date: '2019-08-20',
      tags: ['Visualization', 'Competition'],
      title: '阿里云天池数据可视化竞赛亚军总结',
      link: 'https://ambitionc-blog.oss-cn-hongkong.aliyuncs.com/blogs/blog-7.md',
      isOnHomepage: true,
    },
    {
      date: '2019-08-23',
      tags: ['Visualization', 'Paper Reading'],
      title: 'TelCoVis: 基于电信数据的城市人口移动的视觉探索系统',
      link: 'https://ambitionc-blog.oss-cn-hongkong.aliyuncs.com/blogs/blog-8.md',
      isOnHomepage: true,
    },
    {
      date: '2019-08-29',
      tags: ['Visualization', 'Competition'],
      title: '阿里云数智教育可视化竞赛亚军总结',
      link: 'https://ambitionc-blog.oss-cn-hongkong.aliyuncs.com/blogs/blog-9.md',
      isOnHomepage: true,
    },
    {
      date: '2019-10-02',
      tags: ['Visualization', 'Paper Reading'],
      title: '多类散点图的可视简化与探索',
      link: 'https://ambitionc-blog.oss-cn-hongkong.aliyuncs.com/blogs/blog-10.md',
      isOnHomepage: true,
    },
    {
      date: '2023-08-02',
      tags: ['Investment', 'Data Mining', 'Visualization'],
      title: '低估值：投资确定性分析',
      link: 'https://ambitionc-blog.oss-cn-hongkong.aliyuncs.com/blogs/blog-11.md',
      isOnHomepage: true,
    },
    {
      date: '2023-08-02',
      tags: ['Front-End'],
      title: 'FEDAY-杭州',
      link: 'https://ambitionc-blog.oss-cn-hongkong.aliyuncs.com/blogs/blog-12.md',
      isOnHomepage: true,
    },
  ]
};
