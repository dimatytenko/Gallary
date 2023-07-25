import {FC} from 'react';

import {useFetchSession} from '../hooks/auth';
import {WithChildren} from '../types/helpers';
import {Spinner} from '../ui-kit/Spinner';

const CurrentUser: FC<WithChildren> = ({children}) => {
  const session = useFetchSession();

  if (session?.loading) return <Spinner />;

  return children as React.ReactElement;
};

export default CurrentUser;
