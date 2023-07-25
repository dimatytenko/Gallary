import {getQuery} from './hooks';
import {photoQueryList} from '../constants/api';

export const getPhotosQuery = async (page?: string | null, perPage?: string | null) =>
  await getQuery(photoQueryList.photos(), page, perPage);

export const getPhotoQuery = async (id: string) => await getQuery(photoQueryList.photo(id));

export const getSearchPhotosQuery = async (page?: string | null, perPage?: string | null, tag?: string | null) =>
  await getQuery(photoQueryList.searchPhotos(), page, perPage, tag);

export const getTopicsQuery = async () => await getQuery(photoQueryList.topics());
