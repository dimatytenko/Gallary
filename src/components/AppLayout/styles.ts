import styled from 'styled-components';

import {Media} from '../../ui-kit/theme/breakpoints';
import {TextSmall} from '../../ui-kit/Typography/styles';
import {defaultTheme} from '../../ui-kit/theme/theme';

export const StyledLayout = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 ${({theme}) => theme.spacer._3};

  ${Media.up.m} {
    padding: 0 ${({theme}) => theme.spacer._5};
  }

  ${Media.up.l} {
    padding: 0 ${({theme}) => theme.spacer._15};
  }

  ${Media.up.xxxl} {
    width: 1920px;
  }
`;

export const Main = styled.main<{$isMobile?: boolean}>`
  padding-top: ${({theme}) => theme.spacer._16};
  padding-bottom: ${({theme}) => theme.spacer._5};
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
`;

export const HeaderComponentWrapper = styled.header<{$scrolled?: boolean; $isMobile?: boolean}>`
  position: fixed;
  z-index: 100;
  width: 100%;
  transition: all ${({theme}) => theme.transition.primary};
  padding: ${({theme}) => theme.spacer._3} 0;
  border-bottom: 1px solid ${({theme}) => theme.palette.colors.lightGrey};
  ${({$scrolled}) =>
    $scrolled &&
    `
    background-color: rgba(0, 0, 0, 0.8);
    box-shadow: ${defaultTheme.palette.shadows.primary};
    `}
`;

export const Logo = styled.div``;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({theme}) => theme.spacer._16};

  ${Media.down.m} {
    gap: ${({theme}) => theme.spacer._3};
  }
`;

// footer
export const FooterComponentWrapper = styled.footer`
  padding: ${({theme}) => theme.spacer._8} 0;
  background-color: rgba(0, 0, 0, 0.8);
  min-height: 90px;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextCopy = styled(TextSmall)`
  color: ${({theme}) => theme.palette.colors.secondary};
`;
// ======================
