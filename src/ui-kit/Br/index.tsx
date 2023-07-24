import React from 'react';

import {StyledBr} from './styles';

export const Br: React.FC<{gap?: number}> = ({gap}) => {
  return <StyledBr gap={gap} />;
};
