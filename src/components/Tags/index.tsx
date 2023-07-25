import React from 'react';

import {TagsWrapper, TagWrapper, Info} from './styles';

interface ITagsProps {
  tags: string[];
  goToSearchPhotos: (tag: string) => void;
}

export const Tags: React.FC<ITagsProps> = ({tags, goToSearchPhotos}) => {
  return (
    <TagsWrapper>
      {tags.map((tag) => {
        return (
          <TagWrapper key={tag} onClick={() => goToSearchPhotos(tag)}>
            <Info>{tag}</Info>
          </TagWrapper>
        );
      })}
    </TagsWrapper>
  );
};
