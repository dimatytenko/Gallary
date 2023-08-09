import React from 'react';
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';
import {Select, Button} from 'antd';
import {useNavigate} from 'react-router-dom';
import {HeartOutlined, DeleteOutlined} from '@ant-design/icons';

import {IPhoto} from '../../types/photo';
import {
  StyledImage,
  SpinnerWrapper,
  GalleryHeader,
  PaginattionWrapper,
  GalleryWrapper,
  ImageWrapper,
  IconsWrapper,
} from './styles';
import {ComponentSpinner} from '../../ui-kit/Spinner';
import {Pagination} from '../../components/Pagination';
import {route} from '../../constants/routes';
import {EmptyComponent} from '../../ui-kit/Empty';
import {Mode} from '../../states/common';

interface IGalleryProps {
  photos: IPhoto[];
  isLoading: boolean;
  total?: number;
  countColumn: number;
  handleChange: (value: string) => void;
  collectionId?: string | null;
  addToCollection?: (id: string) => void;
  removeFromCollection?: (id: string) => void;
  secondary?: boolean;
  mode?: Mode;
  handleChangeMode: (value: Mode) => void;
}

export const Gallery: React.FC<IGalleryProps> = ({
  photos,
  isLoading,
  total,
  countColumn,
  handleChange,
  collectionId,
  addToCollection,
  removeFromCollection,
  secondary,
  mode,
  handleChangeMode,
}) => {
  const navigate = useNavigate();

  return (
    <GalleryWrapper>
      <GalleryHeader>
        {countColumn && (
          <Select
            defaultValue={`${countColumn} columns`}
            style={{width: 120}}
            onChange={handleChange}
            options={[
              {value: '3', label: '3 columns'},
              {value: '5', label: '5 columns'},
            ]}
          />
        )}
        {mode && (
          <Select
            defaultValue={mode}
            style={{width: 120}}
            onChange={handleChangeMode}
            options={[
              {value: Mode.PAGE, label: Mode.PAGE},
              {value: Mode.LIST, label: Mode.LIST},
            ]}
          />
        )}
      </GalleryHeader>
      {isLoading && (
        <SpinnerWrapper>
          <ComponentSpinner />
        </SpinnerWrapper>
      )}
      {photos && !photos.length && !isLoading ? (
        <SpinnerWrapper>
          <EmptyComponent
            description={
              'Unfortunately, there is no photo at your request. Maybe "Rate Limit Exceeded" or try changing the query or check if the query entered is correct.'
            }
          />
        </SpinnerWrapper>
      ) : (
        <>
          <ResponsiveMasonry
            columnsCountBreakPoints={
              countColumn === 3 ? {350: 1, 750: 2, 900: 3} : {350: 1, 750: 2, 900: 3, 1200: 4, 1400: 5}
            }>
            <Masonry gutter="20px">
              {photos.map((image) => (
                <ImageWrapper key={image.id}>
                  <StyledImage
                    onClick={() => navigate(route.photoDetails.get({id: image.id}))}
                    height={image.height}
                    src={image.urls.small_s3}
                    alt={image.alt_description}
                  />
                  {collectionId && (
                    <>
                      {!secondary ? (
                        <IconsWrapper>
                          <Button
                            onClick={() =>
                              image.isInCollection ? removeFromCollection?.(image.id) : addToCollection?.(image.id)
                            }>
                            {image.isInCollection ? <DeleteOutlined /> : <HeartOutlined />}
                          </Button>
                        </IconsWrapper>
                      ) : (
                        <IconsWrapper>
                          <Button onClick={() => removeFromCollection?.(image.id)}>
                            <DeleteOutlined />
                          </Button>
                        </IconsWrapper>
                      )}
                    </>
                  )}
                </ImageWrapper>
              ))}
            </Masonry>
          </ResponsiveMasonry>
          <>
            {mode === Mode.PAGE && (
              <PaginattionWrapper>
                <Pagination total={total || 1000} />
              </PaginattionWrapper>
            )}
          </>
        </>
      )}
    </GalleryWrapper>
  );
};
