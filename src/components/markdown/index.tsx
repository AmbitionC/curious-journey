import React, { useEffect, useState } from 'react';
import { marked } from 'marked';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { isMobile } from '@/utils';

interface MarkdownProps {
  url: string;
}

/**
 * @description 文档渲染
 * @returns {React.ReactElement}
 */
function Markdown(props: MarkdownProps): React.ReactElement {
  const { url } = props;
  const [htmlContent, setHtmlContent] = useState('');
  const isEmpty = htmlContent.length === 0;
  const loadingIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  useEffect(() => {
    marked.setOptions({
      renderer: new marked.Renderer(),
      pedantic: false,
      gfm: true,
      breaks: false,
    });
    fetch(url)
      .then((res) => res.text())
      .then((text) => setHtmlContent(text));
  }, []);

  return (
    <div
      className={`markdown-container ${
        isEmpty ? 'min-h-[80vh] flex items-center justify-center' : null
      } ${isMobile() ? 'markdown-container-mobile' : 'markdown-container-pc'}`}
    >
      {isEmpty && <Spin indicator={loadingIcon} />}
      {!isEmpty && (
        <div dangerouslySetInnerHTML={{ __html: marked(htmlContent) }} />
      )}
    </div>
  );
}

export default Markdown;
