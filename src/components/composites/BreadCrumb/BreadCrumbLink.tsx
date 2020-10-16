import React from 'react';
import { Link, ILinkProps } from '../../..';

export const BreadCrumbLink = ({ children, ...props }: ILinkProps) => {
  return <Link {...props}>{children}</Link>;
};
