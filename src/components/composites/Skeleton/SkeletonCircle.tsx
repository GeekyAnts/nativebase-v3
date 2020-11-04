import React from 'react';
import styled from 'styled-components/native';
import { Box, usePropsConfig } from 'native-base';
import { space, layout, border } from 'styled-system';
import type { ISkeletonCircleProps } from './props';
import { Animated } from 'react-native';

const NBSkeletonCircle = ({ children, ...props }: ISkeletonCircleProps) => {
  const blinkAnim = React.useRef(new Animated.Value(0)).current;
  const newProps = usePropsConfig('Skeleton', props);
  const { style, skeletonColor, baseColor } = newProps;

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
      borderRadius: 999,
      backgroundColor: skeletonColor,
      opacity: blinkAnim, // Bind opacity to animated value
    },
    base: {
      borderRadius: 999,
      backgroundColor: baseColor,
    },
  };
  const AnimationViewSetter = () => {
    if (children) {
      if (children.length) {
        return [
          <Animated.View style={[skeletonStyle.skeleton]} />,
          ...children,
        ];
      }
      return [<Animated.View style={[skeletonStyle.skeleton]} />, children];
    }
    return <Animated.View style={[skeletonStyle.skeleton]} />;
  };

  return (
    <Box style={[style, skeletonStyle.base]} {...props}>
      {AnimationViewSetter()}
    </Box>
  );
};

const StyledSkeleton = styled(NBSkeletonCircle)<ISkeletonCircleProps>(
  space,
  layout,
  border
);
StyledSkeleton.defaultProps = {
  isLoaded: false,
};

const SkeletonCircle = ({
  children,
  isLoaded,
  ...props
}: ISkeletonCircleProps) => {
  if (isLoaded) return <Box {...props}>{children}</Box>;

  const hideChildren = () => {
    return React.Children?.map(children, (child: JSX.Element) => {
      return React.cloneElement(child, { opacity: 1 }, child.props.children);
    });
  };

  return (
    <StyledSkeleton width="100%" {...props}>
      {children ? hideChildren() : null}
    </StyledSkeleton>
  );
};

export default SkeletonCircle;
