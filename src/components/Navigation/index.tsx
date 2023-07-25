import {FC} from 'react';
import {Button} from 'antd';

import {NavigationWrapper} from './styles';

interface INavigationProps {
  isAuth: boolean | null;
  logOut: () => void;
}

export const Navigation: FC<INavigationProps> = ({isAuth, logOut}) => {
  return (
    <NavigationWrapper>
      {!isAuth ? (
        <a href="https://unsplash.com/oauth/authorize?client_id=oAA6dnWfOLLcuMlw5cSi1gIOlezBlOCdxT2eqwTyEtA&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth&response_type=code&scope=public+read_user+write_user+read_photos+write_photos+write_likes+write_followers+read_collections+write_collections">
          <Button>Log in</Button>
        </a>
      ) : (
        <Button onClick={logOut}>Log out</Button>
      )}
    </NavigationWrapper>
  );
};
