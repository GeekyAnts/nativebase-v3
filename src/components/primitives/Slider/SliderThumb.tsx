import React, { Children } from 'react';
import { StyleSheet, Animated } from 'react-native';
import { ThemeContext } from '../../../theme';
import { SliderContext } from './index';
import styled from 'styled-components/native';
import { space, color, layout, typography, flex } from 'styled-system';
import { Box, Text } from 'native-base';
import type { ISliderProps } from './props';
export type { ISliderProps };

const NBSliderThumb = ({ children, ...props }: ISliderProps) => {
  const theme = React.useContext(ThemeContext);
  const [value, setValue] = React.useState(30);
  const { sliderValue, pan, panResponder } = React.useContext(SliderContext);
  const customStyle = StyleSheet.create({
    SliderThumb: {
      position: 'absolute',
      left: `${sliderValue}%`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  return (
    <Animated.View
      style={[
        customStyle.SliderThumb,
        {
          transform: [{ translateX: pan.x }],
          // left: pan.x,
        },
      ]}
      {...panResponder.panHandlers}
    >
      <Box
        position="absolute"
        borderRadius={300}
        backgroundColor="red"
        height={5}
        width={5}
        {...props}
      >
        {children}
      </Box>
    </Animated.View>
  );
};

const StyledSlider = styled(NBSliderThumb)<ISliderProps>(
  space,
  color,
  layout,
  typography
);
StyledSlider.defaultProps = {};

const SliderThumb = ({ ...props }: ISliderProps) => {
  return <StyledSlider {...props} />;
};

export default SliderThumb;
