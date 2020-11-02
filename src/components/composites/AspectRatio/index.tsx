import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { Box, IBoxProps } from 'native-base';
import { isNil } from 'lodash';

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
  // DOC:  It uses a aspectRatio property of React Native
  let aspectRatio = !isNil(ratio) ? ratio : 4 / 3;
  computedStyle = StyleSheet.flatten([style, { aspectRatio }]);
  let childStyle = StyleSheet.flatten([
    children.props.style,
    { position: 'absolute', top: 0, bottom: 0, right: 0, left: 0 },
  ]);
  let newChildWithProps = React.cloneElement(
    children,
    { ...children.props, ...{ style: childStyle } },
    children.props.children
  );

  return (
    <Box {...props} style={computedStyle}>
      {newChildWithProps}
    </Box>
  );
};

export default AspectRatio;
