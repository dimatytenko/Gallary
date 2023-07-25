import React from 'react';
import {Route, Routes} from 'react-router-dom';

import {route} from './constants/routes';
import {Main} from './containers/Main';
import {PhotoDetails} from './containers/Photo';
import {SearchPhotos} from './containers/Search/Photos';
import {Auth} from './containers/Auth';

const PublicRoutes = [
  <Route key="main" path={route.main.path} element={<Main />} />,
  <Route key="auth" path={route.auth.path} element={<Auth />} />,
  <Route key="photoDetails" path={route.photoDetails.path} element={<PhotoDetails />} />,
  <Route key="collections" path={route.searchPhotos.path} element={<SearchPhotos />} />,
];

const RoutesSwitch: React.FC = () => {
  return <Routes>{PublicRoutes}</Routes>;
};

export default RoutesSwitch;
