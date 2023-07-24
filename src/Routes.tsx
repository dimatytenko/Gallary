import React, {lazy, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';

import {route} from './constants/routes';
import {Spinner} from './ui-kit/Spinner';
import {Main} from './containers/Main';
import {PhotoDetails} from './containers/Photo';
import {SearchPhotos} from './containers/Search/Photos';

const LogIn = lazy(() => import('./containers/Auth/Login'));

const PublicRoutes = [
  <Route key="login" path={route.login.path} element={<LogIn />} />,
  <Route key="main" path={route.main.path} element={<Main />} />,
  <Route key="photoDetails" path={route.photoDetails.path} element={<PhotoDetails />} />,
  <Route key="collections" path={route.searchPhotos.path} element={<SearchPhotos />} />,
];

const RoutesSwitch: React.FC = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>{PublicRoutes}</Routes>
    </Suspense>
  );
};

export default RoutesSwitch;
