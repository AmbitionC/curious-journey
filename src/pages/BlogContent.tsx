import React from 'react';
import Markdown from '@/components/markdown';
import { urlParse } from '@/utils';

/**
 * @description 博客内容
 * @returns {React.ReactElement}
 */
function BlogContent(): React.ReactElement {
  const params = urlParse();
  const { index } = params;
  const url = `https://ambitionc-blog.oss-cn-hongkong.aliyuncs.com/blogs/blog-${index}.md`;

  return <Markdown url={url} />;
}

export default BlogContent;
