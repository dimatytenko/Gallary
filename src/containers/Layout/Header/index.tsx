import {HeaderComponent} from '../../../components/AppLayout/Header';
import {useSearchPhotos} from '../../../hooks/photo';
import {useLogOut} from '../../../hooks/auth';
import {useViewer} from '../../../hooks/user';

export const Header = () => {
  const {goToSearchPhotos} = useSearchPhotos();
  const logOut = useLogOut();
  const viewer = useViewer();

  return <HeaderComponent onSearch={goToSearchPhotos} logOut={logOut} isAuth={!!viewer} />;
};
