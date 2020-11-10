import React from 'react';
import { StyleSheet, Animated } from 'react-native';
import { ThemeContext } from '../../../theme';
import { SliderContext } from './index';
import styled from 'styled-components/native';
import { space, color, layout, typography } from 'styled-system';
import { Box } from '../../..';
import type { ISliderProps, ISliderContextProps } from './props';

const NBSliderThumb = ({ children, ...props }: ISliderProps) => {
  const theme = React.useContext(ThemeContext);
  const { sliderOffset, panResponder }: ISliderContextProps = React.useContext(
    SliderContext
  );

  const customStyle = StyleSheet.create({
    SliderThumb: {
      position: 'absolute',
      display: 'flex',
      left: sliderOffset,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <Animated.View
      style={customStyle.SliderThumb}
      {...panResponder.panHandlers}
    >
      <Box
        position="relative"
        borderRadius={theme.radii.full}
        backgroundColor={theme.colors.white}
        shadow={1}
        // minHeight={theme.sizes[5]}
        // maxHeight={theme.sizes[5]}
        // maxWidth={theme.sizes[5]}
        // minWidth={theme.sizes[5]}
        height={theme.sizes[5]}
        width={theme.sizes[5]}
        display="flex"
        justifyContent="center"
        alignItems="center"
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
