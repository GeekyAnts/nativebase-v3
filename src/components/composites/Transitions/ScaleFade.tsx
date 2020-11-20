import React from 'react';
import { Box } from '../../primitives';
import { usePropsConfig } from '../../../theme';
import { Animated } from 'react-native';
import type { IScaleFadeProps } from './props';

const ScaleFade = ({ children, ...props }: IScaleFadeProps) => {
  const { in: animationState, duration, initialScale } = usePropsConfig(
    'ScaleFade',
    props
  );
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const scaleAnim = React.useRef(new Animated.Value(initialScale)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: duration,
      useNativeDriver: true,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: duration,
      useNativeDriver: true,
    }).start();
  };
  const scaleIn = () => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: duration,
      useNativeDriver: true,
    }).start();
  };
  const scaleOut = () => {
    Animated.timing(scaleAnim, {
      toValue: initialScale,
      duration: duration,
      useNativeDriver: true,
    }).start();
  };

  if (animationState) {
    fadeIn();
    scaleIn();
  } else {
    fadeOut();
    scaleOut();
  }
  return (
    <Animated.View
      style={{ opacity: fadeAnim, transform: [{ scale: scaleAnim }] }}
    >
      <Box {...props} />
      {children}
    </Animated.View>
  );
};

export default ScaleFade;
