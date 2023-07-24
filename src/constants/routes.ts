import {Route} from '../helpers/Route';

export const route = {
  main: Route.of({path: '/'}),
  login: Route.of({path: '/login'}),
  photoDetails: Route.of<{id: string}>({path: '/:id'}),
  searchPhotos: Route.of<{tag: string}>({path: '/search/photos/:tag'}),
};
