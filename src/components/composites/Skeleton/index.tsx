import React from 'react';
import { Box, usePropsConfig } from 'native-base';
import { Animated } from 'react-native';
import type {
  ISkeletonProps,
  ISkeletonCircleProps,
  ISkeletonTextProps,
} from './props';

const NBSkeleton = ({ children, ...props }: ISkeletonProps) => {
  const newProps = usePropsConfig('Skeleton', props);
  const { style, skeletonColor, baseColor } = newProps;
  const blinkAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    const blink = Animated.sequence([
      Animated.timing(blinkAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(blinkAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]);
    Animated.loop(blink).start();
  }, [blinkAnim]);

  const skeletonStyle = {
    skeleton: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      borderRadius: 3,
      backgroundColor: skeletonColor,
      opacity: blinkAnim, // Bind opacity to animated value
    },
    base: {
      borderRadius: 3,
      backgroundColor: baseColor,
    },
  };

  const AnimationViewSetter = () => {
    if (children) {
      if (children.length) {
        return [<Animated.View style={skeletonStyle.skeleton} />, ...children];
      }
      return [<Animated.View style={skeletonStyle.skeleton} />, children];
    }
    return <Animated.View style={skeletonStyle.skeleton} />;
  };

  return (
    <Box style={[style, skeletonStyle.base]} {...props}>
      {AnimationViewSetter()}
    </Box>
  );
};

const Skeleton = ({ children, isLoaded, ...props }: ISkeletonProps) => {
  if (isLoaded) return <Box {...props}>{children}</Box>;

  const hideChildren = () => {
    return React.Children.map(children, (child: JSX.Element) => {
      return React.cloneElement(child, { opacity: 0 }, child.props.children);
    });
  };

  return (
    <NBSkeleton width="100%" {...props}>
      {children ? hideChildren() : null}
    </NBSkeleton>
  );
};

export default Skeleton;
export { default as SkeletonCircle } from './SkeletonCircle';
export { default as SkeletonText } from './SkeletonText';
export type { ISkeletonProps, ISkeletonCircleProps, ISkeletonTextProps };
