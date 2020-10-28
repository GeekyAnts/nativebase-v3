import React from 'react';
import styled from 'styled-components/native';
import { Box } from 'native-base';
import { space, layout, border } from 'styled-system';
import { Animated } from 'react-native';
import type { ISlideProps } from './props';

const NBSlide = ({
  children,
  in: animationState,
  duration = 500,
  placement = 'bottom',
  ...props
}: ISlideProps) => {
  const [size, setSize] = React.useState(10000);
  const provideSize = (layoutSize: any) => {
    console.log('layoutSize - ', layoutSize);
    if (placement === 'right' || placement === 'left')
      setSize(layoutSize.width);
    else setSize(layoutSize.height);
  };
  const slideAnim = React.useRef(new Animated.Value(size)).current;
  console.log('size - ', size);

  const slideIn = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: duration,
      useNativeDriver: true,
    }).start();
  };

  const slideOut = () => {
    Animated.timing(slideAnim, {
      toValue: size,
      duration: duration,
      useNativeDriver: true,
    }).start();
  };

  const holderStyle = {
    top: {
      top: 0,
      right: 0,
      left: 0,
    },
    right: {
      right: 0,
      top: 0,
      bottom: 0,
    },
    bottom: {
      bottom: 0,
      right: 0,
      left: 0,
    },
    left: {
      left: 0,
      bottom: 0,
      top: 0,
    },
  };
  const animatioStyle = {
    top: { transform: [{ translateY: slideAnim }] },
    right: { transform: [{ translateX: slideAnim }] },
    bottom: { transform: [{ translateY: slideAnim }] },
    left: { transform: [{ translateX: slideAnim }] },
  };

  animationState ? slideIn() : slideOut();
  return (
    <Box position="absolute" overflow="hidden" style={holderStyle[placement]}>
      <Animated.View style={animatioStyle[placement]}>
        <Box {...props} onLayout={(e) => provideSize(e.nativeEvent.layout)}>
          {children}
        </Box>
      </Animated.View>
    </Box>
  );
};

const StyledSlide = styled(NBSlide)<ISlideProps>(space, layout, border);
StyledSlide.defaultProps = {};

const Slide = ({ children, ...props }: ISlideProps) => {
  return <StyledSlide {...props}>{children}</StyledSlide>;
};

export default Slide;
