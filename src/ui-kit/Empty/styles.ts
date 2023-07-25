import styled from 'styled-components';
import {Empty} from 'antd';

import {HeadingMedium3} from '../../ui-kit/Typography';
import {Media} from '../../ui-kit/theme/breakpoints';

export const EmptyWrapper = styled.div`
  width: 355px;
  padding: ${({theme}) => theme.spacer._3} ${({theme}) => theme.spacer._9};
  border-radius: ${({theme}) => theme.spacer._3};
  background-color: ${({theme}) => theme.palette.colors.secondary};

  ${Media.down.xxs} {
    width: 100%;
  }
`;

export const StyledEmpty = styled(Empty)``;

export const EmptyDescription = styled(HeadingMedium3)`
  color: ${({theme}) => theme.palette.colors.denary};
`;

export const AddButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({theme}) => theme.spacer._3};
`;
