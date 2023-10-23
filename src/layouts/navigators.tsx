import React from 'react';
import { Link } from '@umijs/max';
import styled from 'styled-components';
import { NAV_LIST } from '@/constants';
import { isMobile } from '@/utils';

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
function Navigators(): React.ReactElement {
  const pathname = location.pathname === '/' ? '/homepage' : location.pathname;

  return (
    <div className={`mt-5 ${isMobile() ? 'pl-[2rem]' : null}`}>
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
        <div className="flex text-[#aaa] gap-4 mt-3 items-center italic">
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
