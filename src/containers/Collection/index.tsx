import React from 'react';

import {Tag} from '../../components/Tag';
import {Gallery} from '../../components/Gallery';
import {useCollection} from '../../hooks/collection';
import {useCommon} from '../../hooks/common';

export const Collection = () => {
  const {countColumn, handleChange} = useCommon();
  const {photos, isLoading, removeFromCollection, collectionId} = useCollection();

  return (
    <>
      <Tag tag={'custom collection'} />
      <Gallery
        photos={photos || []}
        isLoading={isLoading}
        total={photos?.length}
        handleChange={handleChange}
        countColumn={countColumn}
        removeFromCollection={removeFromCollection}
        collectionId={collectionId}
        collection={[]}
      />
    </>
  );
};
