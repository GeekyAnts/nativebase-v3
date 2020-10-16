import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';

import { Box } from '../../primitives';
import type { IBadgeProps } from './props';
export type { IBadgeProps };
const Container = ({ style, ...props }: IBadgeProps) => {
  let computedStyle: ViewStyle | undefined = style;
  computedStyle = StyleSheet.flatten([style, { width: '100%' }]);
  return <Box {...props} style={computedStyle} />;
};

export default Container;
