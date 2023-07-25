import React from 'react';
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';
import {Select} from 'antd';
import {useNavigate} from 'react-router-dom';

import {IPhoto} from '../../types/photo';
import {StyledImage, SpinnerWrapper, GalleryHeader, PaginattionWrapper, GalleryWrapper} from './styles';
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
}

export const Gallery: React.FC<IGalleryProps> = ({photos, isLoading, total, countColumn, handleChange}) => {
  const navigate = useNavigate();

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
      {!photos.length && !isLoading ? (
        <SpinnerWrapper>
          <EmptyComponent
            description={
              'Unfortunately, there is no photo at your request. Maybe try changing the query or check if the query entered is correct.'
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
                <StyledImage
                  onClick={() => navigate(route.photoDetails.get({id: image.id}))}
                  key={image.id}
                  src={image.urls.small_s3}
                  alt={image.alt_description}
                />
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
