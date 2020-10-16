import React from 'react';
import { StyleSheet, TextStyle, Platform } from 'react-native';
import styled from 'styled-components/native';
import {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  border,
  color,
  flexbox,
  layout,
  space,
  variant,
} from 'styled-system';
import {
  customBorder,
  customBorderProps,
  customBackground,
  customBackgroundProps,
  customOutline,
  customOutlineProps,
  customLayout,
  customLayoutProps,
  customExtra,
  customExtraProps,
  customShadowProps,
  customShadow,
} from '../../../utils/customProps';
import { Text, TextProps } from '../../primitives';
export type ICodeProps = TextProps &
  ColorProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  customBorderProps &
  customExtraProps &
  customOutlineProps &
  customShadowProps &
  customLayoutProps &
  customBackgroundProps &
  BorderProps & {
    style?: TextStyle;
    ratio?: number;
    children?: string | undefined;
    variant?: string | undefined;
    fontSize?: number | undefined;
  };

// Color Varients
let successStyle = {
  backgroundColor: 'success.0',
  color: 'success.1',
};
let dangerStyle = {
  backgroundColor: 'danger.0',
  color: 'danger.1',
};
let warningStyle = {
  backgroundColor: 'warning.0',
  color: 'warning.1',
};
let darkStyle = {
  backgroundColor: 'dark.0',
  color: 'dark.1',
};
let lightStyle = {
  backgroundColor: 'light.0',
  color: 'light.1',
};
let mutedStyle = {
  backgroundColor: 'muted.0',
  color: 'muted.1',
};
let defaultStyle = {
  backgroundColor: 'default.0',
  color: 'default.1',
};

const StyledCode = styled(Text)<ICodeProps>(
  color,
  space,
  layout,
  flexbox,
  border,
  customBorder,
  customBackground,
  customOutline,
  customShadow,
  customExtra,
  customLayout,
  variant({
    variants: {
      success: successStyle,
      green: successStyle,
      error: dangerStyle,
      red: dangerStyle,
      warning: warningStyle,
      yellow: warningStyle,
      light: lightStyle,
      white: lightStyle,
      dark: darkStyle,
      black: darkStyle,
      muted: mutedStyle,
      secondary: mutedStyle,
      comment: mutedStyle,
      grey: mutedStyle,
      default: defaultStyle,
    },
  })
);
StyledCode.defaultProps = {
  variant: 'default',
};
const Code = ({ style, ...props }: ICodeProps) => {
  let computedStyle: any = style;

  computedStyle = StyleSheet.flatten([
    style,
    // colorVarient,
    {
      fontSize: props.fontSize ? props.fontSize : 15,
      fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    },
  ]);

  return (
    <StyledCode px={2} borderRadius={2} {...props} style={computedStyle} />
  );
};

export default Code;
