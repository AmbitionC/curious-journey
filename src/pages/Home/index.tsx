import React from 'react';
import { HOMEPAGE_BLOGS } from '@/constants';
import './index.less';

/**
 * @description 主页卡片
 * @returns {React.ReactElement}
 */
function HomePage(): React.ReactElement {
  return (
    <div className="w-[80vw] h-[100vh] mt-[4rem] max-w-[940px] p-14 ml-auto mr-auto bg-white shadow-contentShadow">
      {/* 最近的博客列表 */}
      {/* TODO：博客列表从接口获取 */}
      <div className="pt-[1rem] pl-[2rem]">
        {HOMEPAGE_BLOGS.map((blog, index) => {
          const { date, title, tags, link } = blog;
          return (
            <div className="mb-[3rem]" key={index}>
              <div className="text-[#aaa] text-xs italic font-thin mb-[1rem]">{`${date} ${tags.join(
                ', ',
              )}`}</div>
              <a
                className="blog-title relative font-thin text-lg text-black leading-4 hover:border-b hover:border-black"
                href={link}
              >
                {title}
              </a>
            </div>
          );
        })}
      </div>
      {/* 底部导航 */}
      <div className="overflow-auto border-t border-gray-200 pt-10 block">
        <a
          href="/blogs"
          className="text-sm text-gray-600 float-right no-underline hover:text-black"
        >
          更多文章
        </a>
      </div>
    </div>
  );
}

export default HomePage;
