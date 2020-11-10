import React from 'react';
import styled from 'styled-components/native';
import { Box } from '../../..';
import { space, layout, border } from 'styled-system';
import { Animated } from 'react-native';
import type { IScaleFadeProps } from './props';

const NBScaleFade = ({
  children,
  in: animationState,
  duration = 500,
  initialScale = 0.9,
  ...props
}: IScaleFadeProps) => {
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

const StyledScaleFade = styled(NBScaleFade)<IScaleFadeProps>(
  space,
  layout,
  border
);

const ScaleFade = ({ children, ...props }: IScaleFadeProps) => {
  return <StyledScaleFade {...props}>{children}</StyledScaleFade>;
};

export default ScaleFade;
