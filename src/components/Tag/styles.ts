import styled from 'styled-components';

import {Heading5} from '../../ui-kit/Typography';

export const Title = styled(Heading5)`
  margin-left: ${({theme}) => theme.spacer._2};
  margin-bottom: ${({theme}) => theme.spacer._3};

  &:first-letter {
    text-transform: uppercase;
  }
`;
