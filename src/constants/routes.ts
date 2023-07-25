import {Route} from '../helpers/Route';

export const route = {
  main: Route.of({path: '/'}),
  auth: Route.of({path: '/auth'}),
  photoDetails: Route.of<{id: string}>({path: '/:id'}),
  searchPhotos: Route.of<{tag: string}>({path: '/search/photos/:tag'}),
};
