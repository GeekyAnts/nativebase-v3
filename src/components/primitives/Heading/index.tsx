import React from 'react';
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
import { theme } from '../../../theme';
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
    children?: string | undefined | JSX.Element[] | JSX.Element;
    fontSize?: string | undefined;
    isTruncated?: any | undefined;
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
  variant({
    prop: 'size',
    variants: {
      '2xl': { fontSize: theme.fontSizes[5] },
      'xl': { fontSize: theme.fontSizes[4] },
      'lg': { fontSize: theme.fontSizes[3] },
      'md': { fontSize: theme.fontSizes[2] },
      'sm': { fontSize: theme.fontSizes[1] },
      'xsm': { fontSize: theme.fontSizes[0] },
    },
  })
);
StyledHeading.defaultProps = {
  size: 'lg',
};
const Heading = ({ style, isTruncated, ...props }: IHeadingProps) => {
  let computedStyle: any = style;
  computedStyle = StyleSheet.flatten([
    style,
    {
      fontWeight: '700',
    },
    props.fontSize ? { fontSize: props.fontSize } : {},
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
