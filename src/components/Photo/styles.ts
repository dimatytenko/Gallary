import styled from 'styled-components';

import {TextBody2, TextBody3} from '../../ui-kit/Typography/styles';
import {Media} from '../../ui-kit/theme/breakpoints';

export const PhotoWrapper = styled.div`
  min-height: calc(100vh - 200px);
  display: flex;
  gap: ${({theme}) => theme.spacer._4};

  ${Media.down.m} {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  min-width: 340px;

  ${Media.down.m} {
    min-width: auto;
    max-width: 340px;
    margin: 0 auto;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  display: block;
`;

export const SpinnerWrapper = styled.div`
  min-height: calc(100vh - 200px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.div``;

export const RowInfo = styled.div`
  display: flex;
  gap: 60px;
  margin-bottom: ${({theme}) => theme.spacer._3};
`;

export const InfoWithLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacer._1};
`;

export const Label = styled(TextBody3)`
  color: ${({theme}) => theme.palette.colors.grayscale};
  display: block;
`;

export const Info = styled(TextBody2)`
  display: block;
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme}) => theme.spacer._1};
  margin-top: ${({theme}) => theme.spacer._2};
`;

export const TagWrapper = styled.div`
  padding: ${({theme}) => theme.spacer._0} ${({theme}) => theme.spacer._2};
  background-color: ${({theme}) => theme.palette.colors.lightGray};
  border-radius: ${({theme}) => theme.spacer._1};
  cursor: pointer;
  transition: background-color ${({theme}) => theme.transition.primary};

  &:hover {
    background-color: ${({theme}) => theme.palette.colors.grayscale};
  }
`;
