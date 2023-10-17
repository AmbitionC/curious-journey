import React from 'react';
import styled from 'styled-components';
import avatarImg from '@/assets/logo.png';
import { SOCIAL_LINKS } from '@/constants';

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid #f2f2f2;
  transition: transform 1s;
  animation: fade-in-down 0.6s;
  animation-delay: 0.2s;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
`;

const LinkIcon = styled.a`
  display: inline-block;
  margin: 0.5rem 5px;
`;

/**
 * @description 头像与外部链接
 * @returns {React.ReactElement}
 */
function Links(): React.ReactElement {
  return (
    <div className="ml-[10rem]">
      <Avatar className="avatar" src={avatarImg} />
      <SocialLinks>
        {SOCIAL_LINKS.map((item) => {
          return (
            <LinkIcon href={item.link} title={item.title} key={item.name}>
              <svg
                className={item.name}
                width="1em"
                height="1em"
                viewBox="0 0 1024 1024"
              >
                <path d={item.svgPath} fill="#bfbfbf" />
              </svg>
            </LinkIcon>
          );
        })}
      </SocialLinks>
    </div>
  );
}

export default Links;
