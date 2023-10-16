import { Outlet } from '@umijs/max';
import { ConfigProvider } from 'antd';
import Footer from './footer';
import Header from './header';
import './index.less';

/**
 * @description 布局
 */
function Layout(): React.ReactElement {
  return (
    <ConfigProvider>
      <div className="w-full bg-[#f7f7f7]">
        <Header />
        <div className="w-full min-h-[calc(100vh-64px)] overflow-y-auto">
          <Outlet />
        </div>
        <Footer />
      </div>
    </ConfigProvider>
  );
}

export default Layout;
