import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { Box } from '../../primitives';
import type { ICenterProps } from './props';

const Center = ({ style, ...props }: ICenterProps) => {
  let computedStyle: ViewStyle | undefined = style;
  computedStyle = StyleSheet.flatten([
    style,
    { display: 'flex', alignItems: 'center', justifyContent: 'center' },
  ]);

  return <Box {...props} style={computedStyle} />;
};

export default Center;
