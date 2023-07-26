import React, {useState, useEffect} from 'react';
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

interface IGalleryProps {
  photos: IPhoto[];
  isLoading: boolean;
  total?: number;
  countColumn: number;
  handleChange: (value: string) => void;
  collectionId?: string | null;
  addToCollection?: (id: string) => void;
  removeFromCollection?: (id: string) => void;
  collection?: IPhoto[];
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
  collection,
}) => {
  const navigate = useNavigate();

  const [photoSort, setPhotoSort] = useState(photos);
  console.log('collection', collection);
  console.log('photos', photos);

  useEffect(() => {
    if (!collection || !photos) return;
    const photoSort = photos.map((i) => {
      if (!collection.find((p) => p.id === i.id)) {
        return i;
      } else {
        return {...i, isInCollection: true};
      }
    });
    setPhotoSort(photoSort);
  }, [!!photos?.length, !!collection?.length]);

  const onAddToCollection = (id: string) => {
    addToCollection?.(id);
    const photoSort = photos.map((i) => {
      if (i.id !== id) {
        return i;
      } else {
        return {...i, isInCollection: true};
      }
    });

    setPhotoSort(photoSort);
  };

  const onRemoveoCollection = (id: string) => {
    removeFromCollection?.(id);
    const photoSort = photos.map((i) => {
      if (i.id !== id) {
        return i;
      } else {
        return {...i, isInCollection: false};
      }
    });

    setPhotoSort(photoSort);
  };

  return (
    <GalleryWrapper>
      <GalleryHeader>
        <Select
          defaultValue={`${countColumn} columns`}
          style={{width: 120}}
          onChange={handleChange}
          options={[
            {value: '3', label: '3 columns'},
            {value: '5', label: '5 columns'},
          ]}
        />
      </GalleryHeader>
      {isLoading && (
        <SpinnerWrapper>
          <ComponentSpinner />
        </SpinnerWrapper>
      )}
      {!photoSort.length && !isLoading ? (
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
              {photoSort.map((image) => (
                <ImageWrapper key={image.id}>
                  <StyledImage
                    onClick={() => navigate(route.photoDetails.get({id: image.id}))}
                    height={image.height}
                    src={image.urls.small_s3}
                    alt={image.alt_description}
                  />
                  {collectionId && (
                    <IconsWrapper>
                      <Button
                        onClick={() =>
                          image.isInCollection ? onRemoveoCollection?.(image.id) : onAddToCollection?.(image.id)
                        }>
                        {image.isInCollection ? <DeleteOutlined /> : <HeartOutlined />}
                      </Button>
                    </IconsWrapper>
                  )}
                </ImageWrapper>
              ))}
            </Masonry>
          </ResponsiveMasonry>
          <PaginattionWrapper>
            <Pagination total={total || 1000} />
          </PaginattionWrapper>
        </>
      )}
    </GalleryWrapper>
  );
};
