import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { Box, IBoxProps } from '../../primitives';

const Center = ({ style, ...props }: IBoxProps) => {
  let computedStyle: ViewStyle | undefined = style;
  computedStyle = StyleSheet.flatten([
    style,
    { display: 'flex', alignItems: 'center', justifyContent: 'center' },
  ]);

  return <Box {...props} style={computedStyle} />;
};

export default Center;
