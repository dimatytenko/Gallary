import React from 'react';

import {Logo} from './Paths';
import {StyledSvgIconProps} from './types';

export const SvgChildren: React.FC<StyledSvgIconProps> = ({type}) => {
  switch (type) {
    case 'logo':
      return <Logo />;

    default:
      return null;
  }
};
