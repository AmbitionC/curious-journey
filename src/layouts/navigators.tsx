import React from 'react';
import logoImg from '@/assets/logo.png';
import { Link } from '@umijs/max';
import styled from 'styled-components';

interface NavProps {
  direction?: 'horizontal' | 'vertical';
  onClick?: () => void;
}

const NAV_LIST = [
  {
    text: 'HomePage',
    to: '/homepage',
  },
  {
    text: 'Blogs',
    to: '/blogs',
  },
  {
    text: 'About',
    to: '/about',
  },
  {
    text: 'Works',
    to: '/works',
  },
  {
    text: 'Talks',
    to: '/talks',
  },
  {
    text: 'Publication',
    to: '/publication',
  },
];

const Description = styled.div`
  font-size: 15px;
  font-weight: 200;
  color: #888;
  margin: 0.2rem 0rem;
`;

/**
 * @description 导航栏
 * @param {NavProps}
 * @returns {React.ReactElement}
 */
function Navigators({
  direction = 'horizontal',
  onClick,
}: NavProps): React.ReactElement {
  const pathname = location.pathname === '/' ? '/homepage' : location.pathname;

  if (direction === 'vertical') {
    return (
      <div className="w-full flex left-0 top-0 h-[100vh] flex-col">
        <Link className="mx-4 my-4 cursor-pointer" to={'/'} onClick={onClick}>
          <img src={logoImg} className="w-[150px] h-[50px]" />
        </Link>
        <div className="flex-1 flex text-[#999] gap-8 mt-1 items-center">
          {NAV_LIST.map((item, index) => {
            const isActive = pathname === item.to;
            return (
              <Link
                className={`flex h-16 items-center text-base cursor-pointer border-b-4 border-transparent hover:border-[#F59E50] hover:text-[#F59E50]  duration-300 ${
                  isActive ? 'text-highlight border-highlight ' : ''
                }`}
                key={index}
                to={item.to}
              >
                <div>{item.text}</div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-5">
      <Link
        className={'cursor-pointer text-highlight font-semibold text-3xl'}
        to="/homepage"
      >
        <span className="bg-gradient-to-r from-blue-400 to-orange-200 text-transparent bg-clip-text">
          Curious Journey
        </span>
      </Link>
      <Description>
        A Frontend-developer, Focusing on Data Analysis and Visualization,
        Lifelong learner
      </Description>
      <div className="w-full flex items-center">
        <div className="flex text-[#aaa] gap-4 mt-3 items-center">
          {NAV_LIST.map((item, index) => {
            const isActive = pathname === item.to;
            return (
              <Link
                className={`flex items-center text-base cursor-pointer hover:text-[#222] hover:border-b hover:border-black duration-300 ${
                  isActive ? 'text-highlight' : ''
                }`}
                key={index}
                to={item.to}
              >
                {item.text}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Navigators;
