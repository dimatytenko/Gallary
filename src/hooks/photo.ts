import {useState, useEffect} from 'react';
import {useSearchParams, useParams, useNavigate} from 'react-router-dom';
import {useRecoilState, useRecoilValue} from 'recoil';

import {getPhotosQuery, getPhotoQuery, getSearchPhotosQuery, getTopicsQuery} from '../queries/photo';
import {IPhoto, ISearchPhotos} from '../types/photo';
import {route} from '../constants/routes';
import {commonState, Mode} from '../states/common';
import {useCollection} from './collection';
import {addToCollectionQuery, removeFromCollectionQuery} from '../queries/collection';

export const usePhotos = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const [searchParams] = useSearchParams();
  const {isLoading: isCollectionLoading, collectionId, photos: collection} = useCollection();
  const {mode} = useRecoilValue(commonState);
  const [page, setPage] = useState(2);
  const [fetching, setFetching] = useState(false);

  // eslint-disable-next-line
  // @ts-ignore
  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      setFetching(true);
    }
  };

  useEffect(() => {
    if (mode === Mode.PAGE) return;
    if (fetching) {
      fetchPhotos(page.toString());
      setPage((prev) => prev + 1);
    }
  }, [fetching]);

  useEffect(() => {
    if (mode === Mode.PAGE) return;
    document.addEventListener('scroll', scrollHandler);
    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, [mode]);

  const fetchPhotos = async (page: string | null, perPage?: string | null) => {
    try {
      const res = await getPhotosQuery(page, perPage);
      const newPhotos = res.body.map((photo: IPhoto) => {
        const isAdded = collection?.some((item) => item.id === photo.id);
        return {...photo, isInCollection: isAdded};
      });
      mode === Mode.PAGE
        ? setPhotos(newPhotos)
        : !photos.length
        ? setPhotos(newPhotos)
        : setPhotos((prev) => [...prev, ...newPhotos]);

      setFetching(false);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos(searchParams.get('page'), searchParams.get('per_page'));
  }, [searchParams.get('page'), searchParams.get('per_page'), collectionId, !!collection.length]);

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
  const {mode} = useRecoilValue(commonState);
  const [page, setPage] = useState(2);
  const [fetching, setFetching] = useState(false);
  const [beforeTag, setBeforeTag] = useState<string | undefined>('');

  // eslint-disable-next-line
  // @ts-ignore
  const scrollHandler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
      setFetching(true);
    }
  };

  useEffect(() => {
    if (mode === Mode.PAGE) return;
    if (fetching) {
      fetchPhotos(page.toString());
      setPage((prev) => prev + 1);
    }
  }, [fetching]);

  useEffect(() => {
    if (mode === Mode.PAGE) return;
    document.addEventListener('scroll', scrollHandler);
    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, [mode]);

  const fetchPhotos = async (page: string | null, perPage?: string | null) => {
    try {
      const res = await getSearchPhotosQuery(page, perPage, tag);
      const newPhotos = res.body.results.map((photo: IPhoto) => {
        const isAdded = collection?.some((item) => item.id === photo.id);
        return {...photo, isInCollection: isAdded};
      });
      if (beforeTag !== tag) {
        setPhotos({...res.body, results: newPhotos});
        setBeforeTag(tag);
        return;
      }

      mode === Mode.PAGE
        ? setPhotos({...res.body, results: newPhotos})
        : !photos?.results.length
        ? setPhotos({...res.body, results: newPhotos})
        : setPhotos((prev) => ({...res.body, results: prev && [...prev?.results, ...newPhotos]}));
      setFetching(false);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos(searchParams.get('page'), searchParams.get('per_page'));
  }, [searchParams.get('page'), searchParams.get('per_page'), tag, collectionId, !!collection.length]);

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
