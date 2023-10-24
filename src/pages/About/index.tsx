import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { isMobile } from '@/utils';
import { OSS_RESOURCES } from '@/constants';

const loadingIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

/**
 * @description 个人信息
 * @returns {React.ReactElement}
 */
function About(): React.ReactElement {
  const { about: aboutUrl } = OSS_RESOURCES;
  const [markdown, setMarkdown] = useState('');
  const isEmptyContent = markdown.length === 0;

  useEffect(() => {
    marked.setOptions({
      renderer: new marked.Renderer(),
      pedantic: false,
      gfm: true,
      breaks: false,
    });
    fetch(aboutUrl)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <div
      className={`markdown-container ${
        isEmptyContent ? 'min-h-[80vh] flex items-center justify-center' : null
      } ${isMobile() ? 'markdown-container-mobile' : 'markdown-container-pc'}`}
    >
      {isEmptyContent && <Spin indicator={loadingIcon} />}
      {!isEmptyContent && (
        <div dangerouslySetInnerHTML={{ __html: marked(markdown) }} />
      )}
    </div>
  );
}

export default About;
