import {postBearerQuery, getBearerQuery, deleteBearerQuery} from './hooks';
import {collectionQueryList} from '../constants/api';

export const createCollectionQuery = async (body: {title: string}) =>
  await postBearerQuery(collectionQueryList.collections()).send(body);

export const getCollectionsQuery = async (username: string) =>
  await getBearerQuery(collectionQueryList.userCollections(username));

export const addToCollectionQuery = async (collectionId: string, body: {collection_id: string; photo_id: string}) =>
  await postBearerQuery(collectionQueryList.addToCollection(collectionId)).send(body);

export const removeFromCollectionQuery = async (
  collectionId: string,
  body: {collection_id: string; photo_id: string},
) => await deleteBearerQuery(collectionQueryList.removeFromCollection(collectionId)).send(body);

export const getCollectionQuery = async (collectionId: string) =>
  await getBearerQuery(collectionQueryList.collection(collectionId));
