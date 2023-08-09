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
  gap: ${({theme}) => theme.spacer._2};
`;

export const PaginattionWrapper = styled.div`
  margin-left: auto;
  margin-top: auto;
`;

export const ImageWrapper = styled.div<{height?: number}>`
  position: relative;
  cupsor: pointer;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  & > div {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover > div {
    opacity: 1;
  }
`;

export const IconsWrapper = styled.div`
  position: absolute;
  top: ${({theme}) => theme.spacer._3};
  right: ${({theme}) => theme.spacer._3};
  display: flex;
  gap: ${({theme}) => theme.spacer._3};
  z-index: 1;
`;
