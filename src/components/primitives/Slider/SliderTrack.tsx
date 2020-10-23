import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ThemeContext } from '../../../theme';
import { SliderContext } from './index';
import styled from 'styled-components/native';
import { space, color, layout, typography } from 'styled-system';
import { Box } from 'native-base';
import type { ISliderProps } from './props';
import { mapKeys } from 'lodash';
export type { ISliderProps };

const NBSliderTrack = ({ children, ...props }: ISliderProps) => {
  const theme = React.useContext(ThemeContext);
  // const { provideSliderSize } = React.useContext(SliderContext);
  return (
    <Box
      position="absolute"
      backgroundColor="grey"
      height={2}
      borderRadius={3}
      width="100%"
      overflow="hidden"
      // onLayout={(e) => {
      //   provideSliderSize(e.nativeEvent.layout);
      // }}
    >
      {children}
    </Box>
  );
};

const StyledSlider = styled(NBSliderTrack)<ISliderProps>(
  space,
  color,
  layout,
  typography
);
StyledSlider.defaultProps = {};

const SliderTrack = ({ ...props }: ISliderProps) => {
  return <StyledSlider {...props} />;
};

export default SliderTrack;
