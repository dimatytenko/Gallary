import React from 'react';
import {useNavigate} from 'react-router-dom';

import {usePhoto} from '../../hooks/photo';
import {Photo} from '../../components/Photo';
import {route} from '../../constants/routes';

export const PhotoDetails = () => {
  const navigate = useNavigate();

  const {photo, isLoading} = usePhoto();
  const goToSearchCollections = (tag: string) => navigate(route.searchPhotos.get({tag: tag}));

  return <Photo isLoading={isLoading} photo={photo} goToSearchCollections={goToSearchCollections} />;
};
