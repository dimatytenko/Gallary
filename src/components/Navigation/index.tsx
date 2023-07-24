import {LinkButton} from '../../ui-kit/Button';
import {route} from '../../constants/routes';
import {NavigationWrapper} from './styles';

export const Navigation = () => {
  return (
    <NavigationWrapper>
      <LinkButton to={route.login.path}>Log in</LinkButton>
    </NavigationWrapper>
  );
};
