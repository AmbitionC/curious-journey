import React from 'react';
import { OSS_RESOURCES } from '@/constants';
import Markdown from '@/components/markdown';

/**
 * @description 演讲
 * @returns {React.ReactElement}
 */
function Talks(): React.ReactElement {
  const { talks: url } = OSS_RESOURCES;

  return <Markdown url={url} />;
}

export default Talks;
