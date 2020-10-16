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
      {Array.isArray(children)
        ? children.map((child: any) => {
            console.log(child);
            return React.cloneElement(
              child,
              isCurrentPage ? computedProps : props
            );
          })
        : React.cloneElement(children, isCurrentPage ? computedProps : props)}
    </Flex>
  );
};
