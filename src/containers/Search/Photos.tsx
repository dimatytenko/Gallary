import React from 'react';

import {useSearch} from '../../hooks/photo';
import {Gallery} from '../../components/Gallery';
import {Tag} from '../../components/Tag';

export const SearchPhotos = () => {
  const {photos, isLoading, tag} = useSearch();
  console.log('photos?.results', photos);

  return (
    <>
      <Tag tag={tag || ''} />
      <Gallery photos={photos?.results || []} isLoading={isLoading} total={photos?.total} />
    </>
  );
};
