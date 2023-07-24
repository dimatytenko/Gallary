import {useState, useEffect} from 'react';

import {HeaderComponentWrapper, Container, HeaderContainer} from './styles';
import {Navigation} from '../Navigation';
import {HomeLink} from '../../ui-kit/Button';

export const HeaderComponent = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window?.pageYOffset > 30 ? setScrolled(true) : setScrolled(false);
    };
    window?.addEventListener('scroll', handleScroll);
    return () => window?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderComponentWrapper $scrolled={scrolled}>
      <Container>
        <HeaderContainer>
          <HomeLink aria-label="Go home">
            Logo
            {/* <IconSvg type="logo" width={'48'} height={'48'} /> */}
          </HomeLink>

          <Navigation />
        </HeaderContainer>
      </Container>
    </HeaderComponentWrapper>
  );
};
