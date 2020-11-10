import React from 'react';
import { Box, usePropsConfig } from 'native-base';
import { Animated } from 'react-native';
import type { IFadeProps } from './props';

const Fade = ({ children, ...props }: IFadeProps) => {
  const { in: animationState, duration } = usePropsConfig('Fade', props);
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

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

  animationState ? fadeIn() : fadeOut();
  return (
    <Animated.View style={{ opacity: fadeAnim }}>
      <Box {...props} />
      {children}
    </Animated.View>
  );
};

export default Fade;
