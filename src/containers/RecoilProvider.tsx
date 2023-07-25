import {FC} from 'react';

import {RecoilRoot} from 'recoil';
import {WithChildren} from '../types/helpers';

const RecoilProvider: FC<WithChildren> = ({children}) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilProvider;
