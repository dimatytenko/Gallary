import React from 'react';
import {format} from 'date-fns';

import {IPhoto} from '../../types/photo';
import {ComponentSpinner} from '../../ui-kit/Spinner';
import {
  PhotoWrapper,
  SpinnerWrapper,
  ImageWrapper,
  StyledImage,
  ContentWrapper,
  RowInfo,
  InfoWithLabel,
  Label,
  Info,
  TagsWrapper,
  TagWrapper,
} from './styles';

interface IPhotoProps {
  isLoading: boolean;
  photo: IPhoto | null;
  goToSearchPhotos: (tag: string) => void;
}

export const Photo: React.FC<IPhotoProps> = ({isLoading, photo, goToSearchPhotos}) => {
  if (isLoading) {
    return (
      <SpinnerWrapper>
        <ComponentSpinner />
      </SpinnerWrapper>
    );
  }

  return (
    <PhotoWrapper>
      {photo && (
        <>
          <ImageWrapper>
            <StyledImage src={photo.urls.small_s3} alt={photo.alt_description} />
          </ImageWrapper>
          <ContentWrapper>
            <RowInfo>
              <InfoWithLabel>
                <Label>Views</Label>
                <Info>{photo.views}</Info>
              </InfoWithLabel>
              <InfoWithLabel>
                <Label>Downloads</Label>
                <Info>{photo.downloads}</Info>
              </InfoWithLabel>
            </RowInfo>
            <Label>{photo.alt_description}</Label>
            <Label>Published on {format(new Date(photo.created_at), 'MMMM dd, yyyy')}</Label>

            <TagsWrapper>
              {photo.tags.map((tag) => (
                <TagWrapper key={tag.title} onClick={() => goToSearchPhotos(tag.title)}>
                  <Info>{tag.title}</Info>
                </TagWrapper>
              ))}
              {photo.tags_preview.map((tag) => (
                <TagWrapper key={tag.title} onClick={() => goToSearchPhotos(tag.title)}>
                  <Info>{tag.title}</Info>
                </TagWrapper>
              ))}
            </TagsWrapper>
          </ContentWrapper>
        </>
      )}
    </PhotoWrapper>
  );
};
