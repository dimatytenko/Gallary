import {FC} from 'react';

import {HeaderComponent} from '../../../components/AppLayout/Header';
import {useSearchPhotos} from '../../../hooks/photo';
import {useViewer} from '../../../hooks/user';

interface IHeaderProps {
  showDrawer: () => void;
}

export const Header: FC<IHeaderProps> = ({showDrawer}) => {
  const {goToSearchPhotos} = useSearchPhotos();
  const viewer = useViewer();

  return <HeaderComponent onSearch={goToSearchPhotos} isAuth={!!viewer} showDrawer={showDrawer} />;
};
