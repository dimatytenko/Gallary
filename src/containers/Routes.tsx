import {FC} from 'react';
import {Navigate} from 'react-router-dom';
import {route} from '../constants/routes';
import {WithChildren} from '../types/helpers';
import {useViewer} from '../hooks/user';

export const PrivateRoute: FC<WithChildren & {path?: string}> = ({children}) => {
  const isAuth = useViewer();

  if (!isAuth) return <Navigate to={route.main.path} replace />; //redirect if not authorize
  return <>{children}</>;
};
