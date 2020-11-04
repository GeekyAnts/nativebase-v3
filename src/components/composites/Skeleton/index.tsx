import React from 'react';
import { Box } from 'native-base';
import type {
  ISkeletonProps,
  ISkeletonCircleProps,
  ISkeletonTextProps,
} from './props';
import Bones from './Bones';

const Skeleton = ({
  children,
  isLoaded,
  ...props
}: ISkeletonProps & { circle?: boolean }) => {
  if (isLoaded) return <Box {...props}>{children}</Box>;

  const hideChildren = () => {
    return React.Children.map(children, (child: JSX.Element) => {
      return React.cloneElement(child, { opacity: 0 }, child.props.children);
    });
  };

  return (
    <Bones width="100%" {...props}>
      {children ? hideChildren() : null}
    </Bones>
  );
};

// Adding circle prop in normal Skeleton which gives it borderRadius
const SkeletonCircle = (props: ISkeletonCircleProps) => {
  return <Skeleton circle {...props} />;
};

export default Skeleton;
export { SkeletonCircle };
export { default as SkeletonText } from './SkeletonText';
export type { ISkeletonProps, ISkeletonCircleProps, ISkeletonTextProps };
