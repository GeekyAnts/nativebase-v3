import React from 'react';
import { StyleSheet, Animated } from 'react-native';
import { ThemeContext } from '../../../theme';
import { SliderContext } from './index';
import styled from 'styled-components/native';
import { space, color, layout, typography } from 'styled-system';
import { Box, Text } from 'native-base';
import type { ISliderProps } from './props';
export type { ISliderProps };

const NBSliderFilledTrack = ({ ...props }: ISliderProps) => {
  const theme = React.useContext(ThemeContext);
  const [value, setValue] = React.useState(30);

  const { sliderValue, pan, panResponder } = React.useContext(SliderContext);

  const customStyle = StyleSheet.create({
    SliderFilledTrack: {
      position: 'absolute',
      // backgroundColor: theme.colors[colorVarient][0],
      // left: `${sliderValue - 150}%`,
      left: `${sliderValue - 100}%`,
      width: '100%',
    },
  });
  console.log('pan - ', pan);

  return (
    <Animated.View
      style={[
        customStyle.SliderFilledTrack,
        {
          // transform: [{ translateX: pan.x }],
          left: `${sliderValue - 100}%`,
          // left: pan.x,
        },
      ]}
      {...panResponder.panHandlers}
    >
      <Box
        position="absolute"
        backgroundColor="blue"
        height={2}
        borderRadius={3}
        width="100%"
      />
    </Animated.View>
  );
};

const StyledSlider = styled(NBSliderFilledTrack)<ISliderProps>(
  space,
  color,
  layout,
  typography
);
StyledSlider.defaultProps = {};

const SliderFilledTrack = ({ ...props }: ISliderProps) => {
  return <StyledSlider {...props} />;
};

export default SliderFilledTrack;
