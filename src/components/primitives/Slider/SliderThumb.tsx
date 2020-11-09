import React from 'react';
import { StyleSheet, Animated } from 'react-native';
import { ThemeContext } from '../../../theme';
import { SliderContext } from './index';
import { Box, Icon } from 'native-base';
import type { ISliderProps, ISliderContextProps } from './props';

const SliderThumb = ({ children, ...props }: ISliderProps) => {
  const theme = React.useContext(ThemeContext);
  const {
    sliderOffset,
    panResponder,
    colorScheme,
    thumbSize,
  }: ISliderContextProps = React.useContext(SliderContext);

  const customStyle = StyleSheet.create({
    SliderThumb: {
      position: 'absolute',
      display: 'flex',
      left: sliderOffset,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  const sizedIcon = () =>
    React.cloneElement(
      children,
      {
        size: thumbSize,
        color: children.props.color ? children.props.color : colorScheme,
      },
      children.props.children
    );

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
        p={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        {...props}
      >
        {children ? (
          sizedIcon()
        ) : (
          <Icon
            name="circle-medium"
            type="MaterialCommunityIcons"
            color={colorScheme}
            size={thumbSize}
            opacity={0}
          />
        )}
      </Box>
    </Animated.View>
  );
};

export default SliderThumb;
