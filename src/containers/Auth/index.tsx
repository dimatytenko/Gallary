import {useAuth} from '../../hooks/auth';

import {Spinner} from '../../ui-kit/Spinner';

export const Auth = () => {
  const {isLoading} = useAuth();

  if (isLoading) return <Spinner />;

  return null;
};
