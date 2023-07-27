import {useState, useEffect} from 'react';
import {useSearchParams, useParams, useNavigate} from 'react-router-dom';
import {useRecoilState} from 'recoil';

import {getPhotosQuery, getPhotoQuery, getSearchPhotosQuery, getTopicsQuery} from '../queries/photo';
import {IPhoto, ISearchPhotos} from '../types/photo';
import {route} from '../constants/routes';
import {commonState} from '../states/common';
import {useCollection} from './collection';
import {addToCollectionQuery, removeFromCollectionQuery} from '../queries/collection';

export const usePhotos = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const [searchParams] = useSearchParams();
  const {isLoading: isCollectionLoading, collectionId, photos: collection} = useCollection();

  const fetchPhotos = async () => {
    try {
      const res = await getPhotosQuery(searchParams.get('page'), searchParams.get('per_page'));
      const newPhotos = res.body.map((photo: IPhoto) => {
        const isAdded = collection?.some((item) => item.id === photo.id);
        return {...photo, isInCollection: isAdded};
      });
      setPhotos(newPhotos);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, [searchParams.get('page'), searchParams.get('per_page'), collectionId]);

  const addToCollection = async (photoId: string) => {
    try {
      if (!collectionId) return;
      await addToCollectionQuery(collectionId, {collection_id: collectionId, photo_id: photoId});
      const sortPhotos = photos.map((photo) => {
        if (photo.id === photoId) {
          return {...photo, isInCollection: true};
        }
        return photo;
      });
      setPhotos(sortPhotos);
    } catch (e) {
      console.log(e);
    }
  };

  const removeFromCollection = async (photoId: string) => {
    try {
      if (!collectionId) return;
      await removeFromCollectionQuery(collectionId, {collection_id: collectionId, photo_id: photoId});
      const sortPhotos = photos.map((photo) => {
        if (photo.id === photoId) {
          return {...photo, isInCollection: false};
        }
        return photo;
      });
      setPhotos(sortPhotos);
    } catch (e) {
      console.log(e);
    }
  };

  return {
    photos,
    isLoading: isCollectionLoading || isLoading,
    collectionId,
    addToCollection,
    removeFromCollection,
  };
};

export const usePhoto = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [photo, setPhoto] = useState<IPhoto | null>(null);
  const {id} = useParams<{id: string}>();

  const fetchPhoto = async () => {
    if (!id) return;
    try {
      const res = await getPhotoQuery(id);
      if (res.ok) {
        setPhoto(res.body);
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPhoto();
  }, [id]);

  return {
    photo,
    isLoading,
  };
};

export const useSearch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [photos, setPhotos] = useState<ISearchPhotos | null>(null);
  const [searchParams] = useSearchParams();
  const {tag} = useParams<{tag: string}>();
  const {isLoading: isCollectionLoading, collectionId, photos: collection} = useCollection();

  const fetchCollections = async () => {
    try {
      const res = await getSearchPhotosQuery(searchParams.get('page'), searchParams.get('per_page'), tag);
      const newPhotos = res.body.results.map((photo: IPhoto) => {
        const isAdded = collection?.some((item) => item.id === photo.id);
        return {...photo, isInCollection: isAdded};
      });
      setPhotos({...res.body, results: newPhotos});
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCollections();
  }, [searchParams.get('page'), searchParams.get('per_page'), tag]);

  const addToCollection = async (photoId: string) => {
    try {
      if (!collectionId || !photos) return;
      await addToCollectionQuery(collectionId, {collection_id: collectionId, photo_id: photoId});
      const sortPhotos = photos.results.map((photo) => {
        if (photo.id === photoId) {
          return {...photo, isInCollection: true};
        }
        return photo;
      });
      setPhotos({...photos, results: sortPhotos});
    } catch (e) {
      console.log(e);
    }
  };

  const removeFromCollection = async (photoId: string) => {
    try {
      if (!collectionId || !photos) return;
      await removeFromCollectionQuery(collectionId, {collection_id: collectionId, photo_id: photoId});
      const sortPhotos = photos.results.map((photo) => {
        if (photo.id === photoId) {
          return {...photo, isInCollection: false};
        }
        return photo;
      });
      setPhotos({...photos, results: sortPhotos});
    } catch (e) {
      console.log(e);
    }
  };

  return {
    photos,
    isLoading: isCollectionLoading || isLoading,
    collectionId,
    addToCollection,
    removeFromCollection,
    tag,
  };
};

export const useSearchPhotos = () => {
  const navigate = useNavigate();
  const goToSearchPhotos = (tag: string) => {
    if (!tag) {
      return navigate(route.main.path);
    }

    navigate(route.searchPhotos.get({tag: tag}));
  };

  return {goToSearchPhotos};
};

export const useTopicsList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [common, setCommon] = useRecoilState(commonState);

  const setTopicsList = (value: string[]) => {
    setCommon((prev) => ({...prev, topics: value}));
  };

  const fetchTopics = async () => {
    try {
      if (common.topics.length) return;
      const res = await getTopicsQuery();
      if (res.ok) {
        const topics = res.body.map((topic: IPhoto) => topic.slug);

        setTopicsList(topics);
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTopics();
  }, []);

  return {
    topics: common.topics,
    isLoading,
  };
};
