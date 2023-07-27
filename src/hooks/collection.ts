import {useState, useEffect} from 'react';
import {message} from 'antd';
import {createCollectionQuery, removeFromCollectionQuery, getCollectionQuery} from '../queries/collection';
import {useViewer} from './user';
import {IPhoto} from '../types/photo';

export const useCollection = () => {
  const user = useViewer();
  const [collectionId, setCollectionId] = useState<string | null>(null);
  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const createCollection = async () => {
    try {
      const res = await createCollectionQuery({title: 'custom collection'});
      setCollectionId(res.body.id);
    } catch (e) {
      console.log(e);
      message.info('You need to confirm your email!');
    }
  };

  const removeFromCollection = async (photoId: string) => {
    try {
      if (!collectionId) return;
      await removeFromCollectionQuery(collectionId, {collection_id: collectionId, photo_id: photoId});
      setPhotos(photos.filter((photo) => photo.id !== photoId));
    } catch (e) {
      console.log(e);
    }
  };

  const fetchCollection = async () => {
    try {
      if (!collectionId) return;
      const res = await getCollectionQuery(collectionId);
      setPhotos(res.body);
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
    removeFromCollection,
    photos,
    isLoading,
    user,
  };
};
