import React from 'react';
import { StyleSheet, ViewStyle, Platform } from 'react-native';
import { Box, IBoxProps } from '../../primitives';
import { isNil } from 'lodash';

export type IAspectRatioProps = IBoxProps & {
  style?: ViewStyle;
  ratio?: number;
  children: JSX.Element;
};

function AspectView(props: any) {
  const [layout, setLayout] = React.useState();
  const { aspectRatio = props.aspectRatio, ...inputStyle } =
    StyleSheet.flatten(props.style) || {};
  const style = [inputStyle];
  if (layout) {
    // @ts-ignore
    let { width = 0, height = 0 } = layout;
    if (width === 0) {
      style.push({ width: height * aspectRatio, height });
    } else {
      style.push({ width, height: width / aspectRatio });
    }
  }
  return (
    <Box
      {...props}
      style={style}
      onLayout={({ nativeEvent: { layout } }: any) => setLayout(layout)}
    />
  );
}

const AspectRatio = ({
  style,
  ratio,
  children,
  ...props
}: IAspectRatioProps) => {
  let computedStyle: ViewStyle | undefined = style;
  let newChildWithProps = React.cloneElement(
    children,
    {
      ...children.props,
      style: StyleSheet.absoluteFillObject,
    },
    children.props.children
  );
  let aspectRatio = !isNil(ratio) ? ratio : 4 / 3;

  // DOC:  It uses a aspectRatio property of React Native and manually calculate on Web
  if (Platform.OS === 'web') {
    return (
      <AspectView {...props} aspectRatio={aspectRatio} style={style}>
        {newChildWithProps}
      </AspectView>
    );
  } else {
    computedStyle = StyleSheet.flatten([style, { aspectRatio }]);
    return (
      <Box {...props} style={computedStyle}>
        {newChildWithProps}
      </Box>
    );
  }
};

export default AspectRatio;
