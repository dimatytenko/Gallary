import {useRecoilState} from 'recoil';

import {userState} from '../states/session';

export const useViewer = () => {
  const user = useRecoilState(userState);
  return user[0];
};
