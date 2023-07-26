import {FC, useState, useEffect} from 'react';

import {HeaderComponentWrapper, Container, HeaderContainer} from './styles';
import {Navigation} from '../Navigation';
import {HomeLink} from '../../ui-kit/Button';
import {SearchComponent} from '../Search';
import {IconSvg} from '../../ui-kit/Icon/Svg';

interface IHeaderComponentProps {
  onSearch: (value: string) => void;
  isAuth: boolean | null;
  showDrawer: () => void;
}

export const HeaderComponent: FC<IHeaderComponentProps> = ({onSearch, isAuth, showDrawer}) => {
  const [scrolled, setScrolled] = useState(false);
  const [fill, setFill] = useState<'primary' | 'secondary'>('primary');

  useEffect(() => {
    const handleScroll = () => {
      if (window?.pageYOffset > 30) {
        setScrolled(true);
        setFill('secondary');
      } else {
        setScrolled(false);
        setFill('primary');
      }
    };
    window?.addEventListener('scroll', handleScroll);
    return () => window?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderComponentWrapper $scrolled={scrolled}>
      <Container>
        <HeaderContainer>
          <HomeLink aria-label="Go home">
            <IconSvg type="logo" width={'40'} height={'40'} viewBox="0 0 64 64" fill={fill} stroke={fill} />
          </HomeLink>

          <SearchComponent
            placeholder="Search high-resolution images"
            onSearch={onSearch}
            size={'small'}
            enterButton={'Search'}
          />

          <Navigation isAuth={isAuth} showDrawer={showDrawer} />
        </HeaderContainer>
      </Container>
    </HeaderComponentWrapper>
  );
};
