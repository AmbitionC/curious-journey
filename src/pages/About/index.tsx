import React from 'react';
import { OSS_RESOURCES } from '@/constants';
import Markdown from '@/components/markdown';

/**
 * @description 个人信息
 * @returns {React.ReactElement}
 */
function About(): React.ReactElement {
  const { about: url } = OSS_RESOURCES;

  return <Markdown url={url} />;
}

export default About;
