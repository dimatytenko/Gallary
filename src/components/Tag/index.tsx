import React from 'react';

import {Title} from './styles';

interface ITagProps {
  tag: string;
}

export const Tag: React.FC<ITagProps> = ({tag}) => {
  return <Title>{tag}</Title>;
};
