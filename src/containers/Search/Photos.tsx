import React from 'react';

import {useSearch, useSearchPhotos, useTopicsList} from '../../hooks/photo';
import {Gallery} from '../../components/Gallery';
import {Tag} from '../../components/Tag';
import {useCommon} from '../../hooks/common';
import {Tags} from '../../components/Tags';
import {useCollection} from '../../hooks/collection';

export const SearchPhotos = () => {
  const {photos, isLoading, tag} = useSearch();
  const {countColumn, handleChange} = useCommon();
  const {goToSearchPhotos} = useSearchPhotos();
  const {topics} = useTopicsList();
  const {collectionId, addToCollection, removeFromCollection, photos: collection} = useCollection();

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
        collectionId={collectionId}
        addToCollection={addToCollection}
        removeFromCollection={removeFromCollection}
        collection={collection}
      />
    </>
  );
};
