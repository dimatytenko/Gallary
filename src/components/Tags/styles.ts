import styled from 'styled-components';

import {TextBody2} from '../../ui-kit/Typography/styles';
import {scrollStyles} from '../../ui-kit/theme/scroll';

export const Info = styled(TextBody2)`
  display: block;
`;

export const TagsWrapper = styled.div`
  ${scrollStyles}
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: ${({theme}) => theme.spacer._1};
  margin-bottom: ${({theme}) => theme.spacer._2};
  padding-bottom: ${({theme}) => theme.spacer._3};
`;

export const TagWrapper = styled.div`
  flex: 0 0 auto;
  padding: ${({theme}) => theme.spacer._0} ${({theme}) => theme.spacer._2};
  background-color: ${({theme}) => theme.palette.colors.lightGray};
  border-radius: ${({theme}) => theme.spacer._1};
  cursor: pointer;
  transition: background-color ${({theme}) => theme.transition.primary};

  &:hover {
    background-color: ${({theme}) => theme.palette.colors.grayscale};
  }
`;
