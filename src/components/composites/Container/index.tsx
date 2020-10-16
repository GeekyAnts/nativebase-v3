import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';

import { Box } from '../../primitives';
import type { IContainerProps } from './props';
export type { IContainerProps };
const Container = ({ style, ...props }: IContainerProps) => {
  let computedStyle: ViewStyle | undefined = style;
  computedStyle = StyleSheet.flatten([style, { width: '100%' }]);
  return <Box {...props} style={computedStyle} />;
};

export default Container;
