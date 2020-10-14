import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';

import { Box, IBoxProps } from '../../primitives';
export type IAspectRatioProps = IBoxProps & {
  style?: ViewStyle;
  ratio?: number;
  children: JSX.Element;
};

const AspectRatio = ({
  style,
  ratio,
  children,
  ...props
}: IAspectRatioProps) => {
  let computedStyle: ViewStyle | undefined = style;
  // DOC:  It uses a very common padding hack to achieve this. https://css-tricks.com/aspect-ratio-boxes/
  let paddingBottom = (100 / (ratio || 1)).toString() + '%';
  computedStyle = StyleSheet.flatten([
    style,
    { paddingBottom, position: 'relative' },
  ]);
  let childStyle = StyleSheet.flatten([
    children.props.style,
    { position: 'absolute', top: 0, bottom: 0, right: 0, left: 0 },
  ]);
  let newChildWithProps = React.cloneElement(
    children,
    { ...children.props, ...{ style: childStyle } },
    children.props.children
  );
  console.log('*** 🔥props.ratio', newChildWithProps);
  return (
    <Box {...props} style={computedStyle}>
      {newChildWithProps}
    </Box>
  );
};

export default AspectRatio;
