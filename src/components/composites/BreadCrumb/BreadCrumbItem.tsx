import React from 'react';
import { Flex } from '../../primitives';
import type { IBreadCrumbProps } from './props';

export const BreadCrumbItem = (
  props: IBreadCrumbProps & { isCurrentPage?: boolean }
) => {
  const { children, isCurrentPage, ...remainingProps } = props;
  const computedProps = { ...remainingProps, isUnderlined: false };
  return (
    <Flex {...remainingProps}>
      {React.Children.map(children, (child: any) => {
        return React.cloneElement(
          child,
          isCurrentPage ? computedProps : remainingProps
        );
      })}
    </Flex>
  );
};
