import {usePhotos} from '../../hooks/photo';
import {Gallery} from '../../components/Gallery';

export const Main = () => {
  const {photos, isLoading} = usePhotos();

  return <Gallery photos={photos} isLoading={isLoading} />;
};
