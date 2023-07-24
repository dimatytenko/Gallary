import React from 'react';
import {Spin} from 'antd';

import {SpinnerWrapper} from './styles';

export const Spinner = () => {
  return (
    <SpinnerWrapper>
      <Spin size="large" />
    </SpinnerWrapper>
  );
};

export const ComponentSpinner = () => {
  return <Spin size="large" />;
};
