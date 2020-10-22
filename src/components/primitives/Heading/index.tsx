import React, { useContext } from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';
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
import { ThemeContext } from '../../../theme';
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
  customLayout,
  { fontWeight: 700 }
);

const Heading = ({ style, size, isTruncated, ...props }: IHeadingProps) => {
  const theme = useContext(ThemeContext);
  const componentTheme = theme.components.Heading;

  let fontSizeWRTHeading =
    componentTheme.sizes[size ? size : componentTheme.defaultProps.size]
      .fontSize;

  const computedStyle: any = StyleSheet.flatten([
    // componentTheme.baseStyle,
    style,
    props.fontSize
      ? { fontSize: props.fontSize }
      : { fontSize: theme.fontSizes[fontSizeWRTHeading] },
  ]);
  return (
    <StyledHeading
      numberOfLines={isTruncated ? 1 : 999999}
      {...props}
      style={computedStyle}
    />
  );
};

export default Heading;
