import React from 'react';
import {Link} from 'react-router-dom';
import {ButtonProps} from 'antd';

import {WithChildren} from '../../types/helpers';
import {StyledLink, StyledButton} from './styles';

export const HomeLink: React.FC<WithChildren> = ({children, ...props}) => {
  return (
    <Link to={'/'} {...props}>
      {children}
    </Link>
  );
};

export const LinkButton: React.FC<ButtonProps & WithChildren & {to: string}> = ({to, children, disabled, ...props}) => (
  <StyledLink {...props} to={disabled ? '#' : to}>
    <StyledButton {...props}>{children}</StyledButton>
  </StyledLink>
);
