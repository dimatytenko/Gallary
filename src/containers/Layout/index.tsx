import {FC, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {ConfigProvider} from 'antd';

import {WithChildren} from '../../types/helpers';
import {Footer} from './Footer';
import {Header} from './Header';
import {AppLayout} from '../../components/AppLayout';

export const Layout: FC<WithChildren> = ({children}) => {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ConfigProvider>
      <AppLayout footer={<Footer />} header={<Header />}>
        {children}
      </AppLayout>
    </ConfigProvider>
  );
};
