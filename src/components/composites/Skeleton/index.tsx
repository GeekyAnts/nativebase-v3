import React from 'react';
import styled from 'styled-components/native';
import { Box, ThemeContext } from 'native-base';
import { space, layout, border } from 'styled-system';
import { Animated } from 'react-native';
export { default as SkeletonCircle } from './SkeletonCircle';
export { default as SkeletonText } from './SkeletonText';
import type {
  ISkeletonProps,
  ISkeletonCircleProps,
  ISkeletonTextProps,
} from './props';
export type { ISkeletonProps, ISkeletonCircleProps, ISkeletonTextProps };

const NBSkeleton = ({
  children,
  style,
  startColor,
  endColor,
  ...props
}: ISkeletonProps) => {
  const theme = React.useContext(ThemeContext);
  const colorSetter = (color: string) => {
    if (color[0] === '#') return color;
    else if (color in theme.colors && theme.colors[color]) {
      return typeof theme.colors[color] === 'string'
        ? theme.colors[color]
        : theme.colors[color][5] || theme.colors[color][2];
    }
  };
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  let skeletonColor = startColor
    ? colorSetter(startColor)
    : theme.colors.muted[2];
  let baseColor = endColor ? colorSetter(endColor) : 'transparent';

  React.useEffect(() => {
    const test = Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]);
    Animated.loop(test).start();
  }, [fadeAnim]);

  const skeletonStyle = {
    skeleton: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      borderRadius: 3,
      backgroundColor: skeletonColor,
      opacity: fadeAnim, // Bind opacity to animated value
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

const StyledSkeleton = styled(NBSkeleton)<ISkeletonProps>(
  space,
  layout,
  border
);
StyledSkeleton.defaultProps = {
  isLoaded: false,
};

const Skeleton = ({ children, isLoaded, ...props }: ISkeletonProps) => {
  if (isLoaded) return <Box {...props}>{children}</Box>;

  const hiddenChildren = () => {
    return children?.map((child: JSX.Element) => {
      return React.cloneElement(child, { opacity: 0 }, child.props.children);
    });
  };

  return (
    <StyledSkeleton width="100%" {...props}>
      {children?.length
        ? hiddenChildren()
        : React.cloneElement(children, { opacity: 0 }, children.props.children)}
    </StyledSkeleton>
  );
};

export default Skeleton;
