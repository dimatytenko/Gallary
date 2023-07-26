import {FC, useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {ConfigProvider} from 'antd';

import {WithChildren} from '../../types/helpers';
import {Footer} from './Footer';
import {Header} from './Header';
import {AppLayout} from '../../components/AppLayout';
import {useLogOut} from '../../hooks/auth';
import {useCollection} from '../../hooks/collection';

export const Layout: FC<WithChildren> = ({children}) => {
  const {pathname} = useLocation();
  const [open, setOpen] = useState(false);
  const logOut = useLogOut();
  const {createCollection, collectionId, user} = useCollection();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ConfigProvider>
      <AppLayout
        footer={<Footer />}
        header={<Header showDrawer={showDrawer} />}
        open={open}
        onClose={onClose}
        logOut={logOut}
        createCollection={createCollection}
        collectionId={collectionId}
        user={user}>
        {children}
      </AppLayout>
    </ConfigProvider>
  );
};
