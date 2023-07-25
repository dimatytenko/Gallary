import React from 'react';

import {useSearch, useSearchPhotos, useTopicsList} from '../../hooks/photo';
import {Gallery} from '../../components/Gallery';
import {Tag} from '../../components/Tag';
import {useCommon} from '../../hooks/common';
import {Tags} from '../../components/Tags';

export const SearchPhotos = () => {
  const {photos, isLoading, tag} = useSearch();
  const {countColumn, handleChange} = useCommon();
  const {goToSearchPhotos} = useSearchPhotos();
  const {topics} = useTopicsList();

  return (
    <>
      <Tag tag={tag || ''} />
      <Tags tags={topics} goToSearchPhotos={goToSearchPhotos} />
      <Gallery
        photos={photos?.results || []}
        isLoading={isLoading}
        total={photos?.total}
        handleChange={handleChange}
        countColumn={countColumn}
      />
    </>
  );
};