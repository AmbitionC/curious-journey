import React from 'react';
import { OSS_RESOURCES } from '@/constants';
import './index.less';

/**
 * @description 主页卡片
 * @returns {React.ReactElement}
 */
function HomePage(): React.ReactElement {
  const { blogs = [] } = OSS_RESOURCES;

  return (
    <div className="w-[80vw] min-h-[60vh] mt-[4rem] max-w-[940px] p-14 ml-auto mr-auto bg-white shadow-contentShadow">
      {/* 最近的博客列表 */}
      {/* TODO：博客列表从接口获取 */}
      <div className="pt-[1rem] pl-[1rem]">
        {blogs.map((blog, index) => {
          const { date, title, tags, link, isOnHomepage } = blog;
          if (!isOnHomepage) return null;
          return (
            <div className="mb-[3rem]" key={index}>
              <div className="text-[#aaa] text-sm italic font-thin mb-[1rem]">{`${date} ${tags.join(
                ', ',
              )}`}</div>
              <a
                className="blog-title relative font-thin text-xl text-[#444] leading-4 hover:text-black hover:border-b hover:border-black"
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
