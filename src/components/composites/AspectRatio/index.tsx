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
  let newChildWithProps = React.cloneElement(
    children,
    {
      ...children.props,
      ...{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0 },
    },
    children.props.children
  );

  return (
    <Box {...props} style={computedStyle}>
      {newChildWithProps}
    </Box>
  );
};

export default AspectRatio;
