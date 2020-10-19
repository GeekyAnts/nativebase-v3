import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import styled from 'styled-components/native';
import { variant } from 'styled-system';
import { Text } from '../../primitives';
import type { ICodeProps } from './props';

import * as StyleVariants from './styleVariants';

// Color Varients
const StyledCode = styled(Text)<ICodeProps>(
  variant({
    prop: 'colorScheme',
    variants: {
      success: StyleVariants.successStyle,
      green: StyleVariants.successStyle,
      error: StyleVariants.dangerStyle,
      danger: StyleVariants.dangerStyle,
      red: StyleVariants.dangerStyle,
      warning: StyleVariants.warningStyle,
      yellow: StyleVariants.warningStyle,
      light: StyleVariants.lightStyle,
      white: StyleVariants.lightStyle,
      dark: StyleVariants.darkStyle,
      black: StyleVariants.darkStyle,
      muted: StyleVariants.mutedStyle,
      secondary: StyleVariants.mutedStyle,
      comment: StyleVariants.mutedStyle,
      grey: StyleVariants.mutedStyle,
      default: StyleVariants.defaultStyle,
    },
  })
);
StyledCode.defaultProps = {
  colorScheme: 'default',
};
const defaultCodeProps = {
  px: 2,
  py: 1,
  borderRadius: 2,
};
const Code = ({ style, ...props }: ICodeProps) => {
  let computedStyle: any = style;

  computedStyle = StyleSheet.flatten([
    style,
    {
      fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    },
  ]);

  return <StyledCode {...defaultCodeProps} style={computedStyle} {...props} />;
};

export { ICodeProps } from './props';
export default Code;
