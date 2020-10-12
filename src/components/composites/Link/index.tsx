import React from 'react';
import { StyleSheet, Text, TextStyle, Linking } from 'react-native';
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
export type ILinkProps = ColorProps &
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
    href?: string | undefined;
    size?: '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xsm' | number;
    IsUnderlined?: boolean | undefined;
  };

const StyledLink = styled(Text)<ILinkProps>(
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
const linkToHREF = (URL: string) => {
  Linking.openURL(URL).catch((err) => console.error('An error occurred', err));
};
const Link = ({
  style,
  isTruncated,
  href,
  IsUnderlined = true,
  ...props
}: ILinkProps) => {
  let computedStyle: any = style;
  computedStyle = StyleSheet.flatten([
    style,
    {
      width: 'auto',
      height: 'auto',
      textDecorationLine: IsUnderlined ? 'underline' : 'none',
    },
  ]);
  return (
    <StyledLink
      numberOfLines={isTruncated ? 1 : 999999}
      {...props}
      onPress={() => {
        href ? linkToHREF(href) : '';
      }}
      style={computedStyle}
    />
  );
};

export default Link;
