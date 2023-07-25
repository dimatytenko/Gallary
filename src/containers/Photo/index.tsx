import React from 'react';

import {usePhoto, useSearchPhotos} from '../../hooks/photo';
import {Photo} from '../../components/Photo';

export const PhotoDetails = () => {
  const {photo, isLoading} = usePhoto();
  const {goToSearchPhotos} = useSearchPhotos();

  return <Photo isLoading={isLoading} photo={photo} goToSearchPhotos={goToSearchPhotos} />;
};
