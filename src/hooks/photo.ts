import {useState, useEffect} from 'react';
import {useSearchParams, useParams} from 'react-router-dom';

import {getPhotosQuery, getPhotoQuery, getCollectionsQuery} from '../queries/photo';
import {IPhoto, ISearchPhotos} from '../types/photo';

export const usePhotos = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const [searchParams] = useSearchParams();

  const fetchPhotos = async () => {
    try {
      const res = await getPhotosQuery(searchParams.get('page'), searchParams.get('per_page'));
      if (res.ok) {
        setPhotos(res.body);
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos();
  }, [searchParams.get('page'), searchParams.get('per_page')]);

  return {
    photos,
    isLoading,
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

  const fetchCollections = async () => {
    try {
      const res = await getCollectionsQuery(searchParams.get('page'), searchParams.get('per_page'), tag);
      if (res.ok) {
        setPhotos(res.body);
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCollections();
  }, [searchParams.get('page'), searchParams.get('per_page'), tag]);

  return {
    photos,
    isLoading,
    tag,
  };
};
