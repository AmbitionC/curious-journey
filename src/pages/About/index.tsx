import React, { useState, useEffect } from 'react';
import { marked } from 'marked';

/**
 * @description 个人信息
 * @returns {React.ReactElement}
 */
function About(): React.ReactElement {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    marked.setOptions({
      renderer: new marked.Renderer(),
      pedantic: false,
      gfm: true,
      breaks: false,
    });
    fetch('https://ambitionc-blog.oss-cn-hongkong.aliyuncs.com/about/about.md')
      .then((res) => res.text())
      .then((text) => setMarkdown(text))
      .catch((error) => {
        console.log(error, 'err，文档获取失败');
      });
  }, []);

  return (
    <div className="markdown-container">
      <div dangerouslySetInnerHTML={{ __html: marked(markdown) }}></div>
    </div>
  );
}

export default About;
