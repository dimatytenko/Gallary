import {FC} from 'react';
import {Button} from 'antd';
import {MenuFoldOutlined} from '@ant-design/icons';

import {NavigationWrapper} from './styles';
import {REDIRECT_URL, CLIENT_ID, SERVER_AUTH_URL} from '../../constants/env';
import {authQueryList} from '../../constants/api';

interface INavigationProps {
  isAuth: boolean | null;
  showDrawer: () => void;
}

export const Navigation: FC<INavigationProps> = ({isAuth, showDrawer}) => {
  const handleAuthorization = () => {
    const responseType = 'code';
    const scope =
      'public+read_user+write_user+read_photos+write_photos+write_likes+write_followers+read_collections+write_collections';

    const authorizationUrl = `${SERVER_AUTH_URL}${authQueryList.auth()}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=${responseType}&scope=${scope}`;
    window.location.href = authorizationUrl;
  };

  return (
    <NavigationWrapper>
      {!isAuth ? (
        <Button onClick={handleAuthorization}>Log in</Button>
      ) : (
        <>
          <Button onClick={showDrawer}>
            <MenuFoldOutlined />
          </Button>
        </>
      )}
    </NavigationWrapper>
  );
};
