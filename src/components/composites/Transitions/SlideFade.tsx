import React from 'react';
import styled from 'styled-components/native';
import { Box } from '@native-base/v3';
import { space, layout, border } from 'styled-system';
import { Animated } from 'react-native';
import type { ISlideFadeProps } from './props';

const NBSlideFade = ({
  children,
  in: animationState,
  duration = 500,
  offsetX = 10,
  offsetY = 10,
  ...props
}: ISlideFadeProps) => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const slideAnimX = React.useRef(new Animated.Value(0)).current;
  const slideAnimY = React.useRef(new Animated.Value(0)).current;

  const animIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: duration,
      useNativeDriver: true,
    }).start();

    Animated.timing(slideAnimX, {
      toValue: 0,
      duration: duration,
      useNativeDriver: true,
    }).start();
    Animated.timing(slideAnimY, {
      toValue: 0,
      duration: duration,
      useNativeDriver: true,
    }).start();
  };
  const animOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: duration,
      useNativeDriver: true,
    }).start();
    offsetX &&
      Animated.timing(slideAnimX, {
        toValue: offsetX,
        duration: duration,
        useNativeDriver: true,
      }).start();
    offsetY &&
      Animated.timing(slideAnimY, {
        toValue: offsetY,
        duration: duration,
        useNativeDriver: true,
      }).start();
  };
  animationState ? animIn() : animOut();

  return (
    <Animated.View
      style={[
        {
          opacity: fadeAnim,
          transform: [{ translateX: slideAnimX, translateY: slideAnimY }],
        },
      ]}
    >
      <Box {...props}>{children}</Box>
    </Animated.View>
  );
};

const StyledSlideFade = styled(NBSlideFade)<ISlideFadeProps>(
  space,
  layout,
  border
);

const SlideFade = ({ children, ...props }: ISlideFadeProps) => {
  return <StyledSlideFade {...props}>{children}</StyledSlideFade>;
};

export default SlideFade;
