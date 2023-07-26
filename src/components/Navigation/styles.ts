import styled from 'styled-components';

export const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({theme}) => theme.spacer._3};
`;

export const StyledButton = styled.a`
  flex: 0 0 auto;
`;
