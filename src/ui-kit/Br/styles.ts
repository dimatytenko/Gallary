import styled from 'styled-components';

export const StyledBr = styled.div<{gap?: number}>`
  margin-bottom: ${({theme, gap}) => theme.spacer[`_${gap || 0}`]};
`;
