import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';

import { Box, IBoxProps } from '../../primitives';
type IAspectRatioBoxProps = IBoxProps & {
  style?: ViewStyle;
  ratio?: number;
  children?: JSX.Element | JSX.Element[];
};

const AspectRatioBox = ({ style, ...props }: IAspectRatioBoxProps) => {
  let computedStyle: ViewStyle | undefined = style;
  if (props.w || props.width) {
    let width: any = props.w
      ? props.w.toString()
      : props.width
      ? props.width.toString()
      : '';
    var length = parseInt(width.match(/(\d+)/)[0], 10);
    computedStyle = StyleSheet.flatten([
      style,
      props.ratio ? { height: length * (1 / props.ratio) } : {},
    ]);
  }
  if (props.h || props.height) {
    let height: any = props.h
      ? props.h.toString()
      : props.height
      ? props.height.toString()
      : '';
    var length = parseInt(height.match(/(\d+)/)[0], 10);
    computedStyle = StyleSheet.flatten([
      style,
      props.ratio ? { width: length * props.ratio } : {},
    ]);
  }
  if ((props.w || props.width) && (props.h || props.height)) {
    computedStyle = StyleSheet.flatten([
      style,
      {
        width: props.w
          ? props.w.toString()
          : props.width
          ? props.width.toString()
          : '',
        height: props.h
          ? props.h.toString()
          : props.height
          ? props.height.toString()
          : '',
      },
    ]);
  }
  if (!props.w && !props.width && !props.h && !props.height) {
    computedStyle = StyleSheet.flatten([
      style,
      props.ratio ? { height: 100 * (1 / props.ratio), width: '100' } : {},
    ]);
  }

  return <Box {...props} style={computedStyle} />;
};

export default AspectRatioBox;
