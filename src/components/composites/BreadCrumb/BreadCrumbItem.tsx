import React from 'react';
import { Flex } from '../../..';
import type { IBreadCrumbProps } from './props';

export const BreadCrumbItem = ({
  children,
  isCurrentPage,
  ...props
}: IBreadCrumbProps & { isCurrentPage?: boolean }) => {
  const computedProps = { ...props, isUnderlined: false };
  return (
    <Flex {...props}>
      {React.Children.map(children, (child: any) => {
        return React.cloneElement(child, isCurrentPage ? computedProps : props);
      })}
    </Flex>
  );
};
