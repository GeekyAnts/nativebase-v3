import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';

import { Box, IBoxProps } from '../../primitives';

const Container = ({ style, ...props }: IBoxProps) => {
  let computedStyle: ViewStyle | undefined = style;
  computedStyle = StyleSheet.flatten([style, { width: '100%' }]);
  return <Box {...props} style={computedStyle} />;
};

export default Container;
