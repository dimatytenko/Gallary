import styled from 'styled-components';

export const GalleryWrapper = styled.div`
  min-height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacer._4};
`;

export const StyledImage = styled.img`
  width: 100%;
  display: block;
  cursor: pointer;
`;

export const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const GalleryHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const PaginattionWrapper = styled.div`
  margin-left: auto;
  margin-top: auto;
`;
