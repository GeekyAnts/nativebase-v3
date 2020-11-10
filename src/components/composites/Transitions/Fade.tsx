import React from 'react';
import styled from 'styled-components/native';
import { Box } from '@native-base/v3';
import { space, layout, border } from 'styled-system';
import { Animated } from 'react-native';
import type { IFadeProps } from './props';

const NBFade = ({
  children,
  in: animationState,
  duration = 500,
  ...props
}: IFadeProps) => {
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

const StyledFade = styled(NBFade)<IFadeProps>(space, layout, border);
StyledFade.defaultProps = {};

const Fade = ({ children, ...props }: IFadeProps) => {
  return <StyledFade {...props}>{children}</StyledFade>;
};

export default Fade;
