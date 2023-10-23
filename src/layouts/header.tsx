import Navigators from './navigators';
import Links from './links';
import { isMobile } from '@/utils';

/**
 * @description 头部菜单
 * @returns {React.ReactElement}
 */
function Header(): React.ReactElement {
  return (
    <div className="pt-[7rem] z-[99] flex mx-auto justify-center">
      <Navigators />
      {!isMobile() && <Links />}
    </div>
  );
}

export default Header;
