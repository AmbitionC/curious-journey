import React from 'react';
import { OSS_RESOURCES } from '@/constants';
import Markdown from '@/components/markdown';

/**
 * @description 论文
 * @returns {React.ReactElement}
 */
function Publications(): React.ReactElement {
  const { publications: url } = OSS_RESOURCES;

  return <Markdown url={url} />;
}

export default Publications;
