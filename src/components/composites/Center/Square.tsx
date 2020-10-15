import { isNil } from 'lodash';
import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { Box } from '../../primitives';
import type { ISquareProps } from './props';

const Square = ({ style, size, ...props }: ISquareProps) => {
  const height = props.height || props.h;
  const width = props.width || props.w;
  const computedStyle: ViewStyle | undefined = StyleSheet.flatten([
    style,
    {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  ]);

  return (
    <Box
      {...props}
      height={!isNil(height) ? height : size}
      width={!isNil(width) ? width : size}
      style={computedStyle}
    />
  );
};

export default Square;
