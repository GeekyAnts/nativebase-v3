import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
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
import { theme } from '../../../theme';
const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl'];
export type IHeadingProps = ColorProps &
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
    children?: string | JSX.Element[] | JSX.Element;
    fontSize?: number;
    isTruncated?: any;
    size?: typeof sizes[number];
  };

const StyledHeading = styled(Text)<IHeadingProps>(
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
  customLayout
);
const Heading = ({ style, size, isTruncated, ...props }: IHeadingProps) => {
  let computedStyle: any = style;
  let fontSizeWRTHeading = size
    ? // @ts-ignore
      theme.fontSizes[size]
    : theme.fontSizes['xl'];
  computedStyle = StyleSheet.flatten([
    style,
    {
      fontWeight: '700',
    },
    props.fontSize
      ? { fontSize: props.fontSize }
      : { fontSize: fontSizeWRTHeading },
  ]);
  return (
    <ThemeProvider theme={theme}>
      <StyledHeading
        numberOfLines={isTruncated ? 1 : 999999}
        {...props}
        style={computedStyle}
      />
    </ThemeProvider>
  );
};

export default Heading;
