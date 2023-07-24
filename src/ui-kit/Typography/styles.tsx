import styled, {css} from 'styled-components';
import {Typography} from 'antd';

import {Media} from '../theme/breakpoints';
import {mixins} from '../theme/mixins';

const {Text} = Typography;

const common = css`
  color: ${({theme}) => theme.palette.colors.primary};
  line-height: 1;
`;

const heading = css`
  display: block;
`;

export const StyledHeading1 = styled(Text)`
  ${common};
  ${heading};
  ${mixins.font.secondary.bold};
  font-size: 52px;
  line-height: 1.5;
  ${Media.down.m} {
    font-size: 38px;
    line-height: 1.5px;
  }
`;

export const StyledHeading2 = styled(Text)`
  ${common};
  ${heading};
  ${mixins.font.primary.bold};
  font-size: 60px;
  line-height: 1.2;
  ${Media.down.m} {
    font-size: 32px;
    line-height: 1.2;
  }
`;

export const StyledHeading3 = styled(Text)`
  ${common};
  ${heading};
  ${mixins.font.secondary.bold};
  font-size: 48px;
  line-height: 1.2;
  ${Media.down.m} {
    font-size: 28px;
    line-height: 1.2;
  }
`;

export const StyledHeading4 = styled(Text)`
  ${common};
  ${heading};
  ${mixins.font.primary.bold};
  font-size: 36px;
  line-height: 1.15;
  ${Media.down.m} {
    font-size: 26px;
    line-height: 1.15;
  }
`;

export const StyledHeading5 = styled(Text)`
  ${common};
  ${heading};
  ${mixins.font.secondary.bold};
  font-size: 24px;
  line-height: 1.33;
  ${Media.down.m} {
    font-size: 24px;
    line-height: 1.33;
  }
`;

export const StyledHeading6 = styled(Text)`
  ${common};
  ${heading};
  ${mixins.font.primary.bold};
  font-size: 20px;
  line-height: 1.4;
  ${Media.down.m} {
    font-size: 20px;
    line-height: 1.4;
  }
`;

export const StyledHeadingMedium = styled(Text)`
  ${common};
  ${heading};
  ${mixins.font.secondary.bold};
  font-size: 38px;
  ${Media.down.m} {
    font-size: 32px;
  }
`;

export const StyledHeadingMedium2 = styled(Text)`
  ${common};
  ${heading};
  ${mixins.font.primary.bold};
  font-size: 26px;
  line-height: 1.32;
`;

export const StyledHeadingMedium3 = styled(Text)`
  ${common};
  ${heading};
  ${mixins.font.secondary.bold};
  font-size: 20px;
  line-height: 1.4;
  ${Media.down.m} {
    font-size: 24px;
    line-height: 1.4;
  }
`;

export const TextBody1 = styled(Text)`
  ${common};
  ${mixins.font.primary.regular};
  font-size: 20px;
  line-height: 1.2;
`;

export const TextBody2 = styled(Text)`
  ${common};
  ${mixins.font.primary.regular};
  font-size: 20px;
  line-height: 1.2;
  ${Media.down.l} {
    font-size: 16px;
    line-height: 1.2;
  }
`;

export const TextBody3 = styled(Text)`
  ${common};
  ${mixins.font.primary.regular};
  font-size: 16px;
  line-height: 1.2;
`;

export const TextBody4 = styled(Text)`
  ${common};
  ${mixins.font.primary.regular};
  font-size: 14px;
  line-height: 1.4;
`;

export const TextBody1Bold = styled(Text)`
  ${common};
  ${mixins.font.primary.bold};
  font-size: 20px;
  line-height: 1.2;
`;

export const TextBody2Bold = styled(Text)`
  ${common};
  ${mixins.font.primary.bold};
  font-size: 20px;
  line-height: 1.2;
  ${Media.down.l} {
    font-size: 16px;
    line-height: 1.2;
  }
`;

export const TextBody3Bold = styled(Text)`
  ${common};
  ${mixins.font.primary.bold};
  font-size: 16px;
  line-height: 1.2;
`;

export const TextBody4Bold = styled(Text)`
  ${common};
  ${mixins.font.primary.bold};
  font-size: 14px;
  line-height: 1.4;
`;

export const TextSmall = styled(Text)`
  ${common};
  ${mixins.font.primary.regular};
  font-size: 12px;
  line-height: 1.2;
`;
export const TextSmallBold = styled(Text)`
  ${common};
  ${mixins.font.primary.bold};
  font-size: 12px;
  line-height: 1.4;
`;

export const TextVerySmall = styled(Text)`
  ${common};
  ${mixins.font.primary.regular};
  font-size: 10px;
  line-height: 1.2;
`;

export const TextVerySmallBold = styled(Text)`
  ${common};
  ${mixins.font.primary.bold};
  font-size: 10px;
  line-height: 1.2;
`;

export const StyledTextNote = styled(Text)`
  ${common};
  ${mixins.font.tertiary.regular};
  font-size: 12px;
  line-height: 1.6;
`;

export const InputTextStyles = css`
  ${mixins.font.primary.regular};
  color: ${({theme}) => theme.palette.colors.primary};
  font-size: 14px;
`;
