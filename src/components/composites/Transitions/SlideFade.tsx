import React from 'react';
import { Box } from '../../primitives';
import { usePropsConfig } from '../../../theme';
import { Animated } from 'react-native';
import type { ISlideFadeProps } from './props';

const SlideFade = ({ children, ...props }: ISlideFadeProps) => {
  const { in: animationState, duration, offsetX, offsetY } = usePropsConfig(
    'SlideFade',
    props
  );
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

export default SlideFade;
