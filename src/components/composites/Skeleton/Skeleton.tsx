import React from 'react';
import { Box } from '../../primitives';
import type { ISkeletonProps } from './props';
import Bones from './Bones';
import type { AccessibilityProps } from 'react-native';

export const Skeleton = ({
  children,
  isLoaded,
  accessibilityLabel,
  ...props
}: ISkeletonProps & { circle?: boolean }) => {
  if (isLoaded) return <Box {...props}>{children}</Box>;

  const hideChildren = () => {
    return React.Children.map(children, (child: JSX.Element, index: number) => {
      return React.cloneElement(
        child,
        { opacity: 0, key: `skeleton-hide-child-${index}` },
        child.props.children
      );
    });
  };

  const accessibilityProps: AccessibilityProps = {
    accessible: true,
    accessibilityRole: 'progressbar',
    accessibilityLabel,
  };

  return (
    <Bones width="100%" {...accessibilityProps} {...props}>
      {children ? hideChildren() : null}
    </Bones>
  );
};
