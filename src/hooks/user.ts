import {useRecoilState, useSetRecoilState} from 'recoil';

import {userState} from '../states/session';
import {IUser} from '../types/user';

export const useViewer = () => {
  const user = useRecoilState(userState);
  return user[0];
};

export const useUpdateViewer = () => {
  const setUser = useSetRecoilState(userState);
  return (user: IUser) => {
    setUser(user);
  };
};
