import {useState, useEffect} from 'react';

import {
  createCollectionQuery,
  addToCollectionQuery,
  removeFromCollectionQuery,
  getCollectionQuery,
} from '../queries/collection';
import {useViewer} from './user';
import {IPhoto} from '../types/photo';

export const useCollection = () => {
  const user = useViewer();
  const [collectionId, setCollectionId] = useState<string | null>(null);
  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const createCollection = async () => {
    try {
      await createCollectionQuery({title: 'custom collection'});
    } catch (e) {
      console.log(e);
    }
  };

  const addToCollection = async (photoId: string) => {
    try {
      if (!collectionId) return;
      const res = await addToCollectionQuery(collectionId, {collection_id: collectionId, photo_id: photoId});
      console.log('res.body', res.body);
      setPhotos([...photos, res.body.photo]);
    } catch (e) {
      console.log(e);
    }
  };

  const removeFromCollection = async (photoId: string) => {
    try {
      if (!collectionId) return;
      const res = await removeFromCollectionQuery(collectionId, {collection_id: collectionId, photo_id: photoId});
      if (res.ok) {
        setPhotos(photos.filter((photo) => photo.id !== photoId));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const fetchCollection = async () => {
    try {
      if (!collectionId) return;
      const res = await getCollectionQuery(collectionId);
      if (res.ok) {
        setPhotos(res.body);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCollection();
  }, [collectionId]);

  useEffect(() => {
    if (!user) return;
    const collection = user?.collections?.find((collection) => collection.title === 'custom collection');
    if (collection) {
      setCollectionId(collection.id);
    }
  }, [user]);

  return {
    createCollection,
    collectionId,
    addToCollection,
    removeFromCollection,
    photos,
    isLoading,
    user,
  };
};
