import Navigators from './navigators';
import Links from './links';

/**
 * @description 头部菜单
 * @returns {React.ReactElement}
 */
function Header(): React.ReactElement {
  return (
    <div className="sticky top-[8rem] z-[99] flex mx-auto justify-center">
      <Navigators />
      <Links />
    </div>
  );
}

export default Header;
