import {usePhotos, useTopicsList, useSearchPhotos} from '../../hooks/photo';
import {Gallery} from '../../components/Gallery';
import {useCommon} from '../../hooks/common';
import {Tags} from '../../components/Tags';
import {useCollection} from '../../hooks/collection';

export const Main = () => {
  const {photos, isLoading} = usePhotos();
  const {countColumn, handleChange} = useCommon();
  const {topics} = useTopicsList();
  const {goToSearchPhotos} = useSearchPhotos();
  const {collectionId, addToCollection, removeFromCollection, photos: collection} = useCollection();

  return (
    <>
      <Tags tags={topics} goToSearchPhotos={goToSearchPhotos} />
      <Gallery
        photos={photos}
        isLoading={isLoading}
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
