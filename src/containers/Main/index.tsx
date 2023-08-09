import {usePhotos, useTopicsList, useSearchPhotos} from '../../hooks/photo';
import {Gallery} from '../../components/Gallery';
import {useCommon} from '../../hooks/common';
import {Tags} from '../../components/Tags';

export const Main = () => {
  const {photos, isLoading, collectionId, addToCollection, removeFromCollection} = usePhotos();
  const {countColumn, handleChange, mode, handleChangeMode} = useCommon();
  const {topics} = useTopicsList();
  const {goToSearchPhotos} = useSearchPhotos();

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
        mode={mode}
        handleChangeMode={handleChangeMode}
      />
    </>
  );
};
