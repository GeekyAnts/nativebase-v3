import React, { useContext } from 'react';
import { StyleSheet, Text, TextProps, TextStyle } from 'react-native';
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
import { ThemeContext } from '../../../theme';
export type IBadgeProps = TextProps &
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
    variantType?: string | undefined;
    variant?: string | undefined;
    children?: string | undefined;
    fontSize?: number | undefined;
  };
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

const StyledBadge = styled(Text)<IBadgeProps>(
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
      danger: dangerStyle,
      red: dangerStyle,
      warning: warningStyle,
      yellow: warningStyle,
      light: lightStyle,
      white: lightStyle,
      dark: darkStyle,
      black: darkStyle,
      muted: mutedStyle,
      secondary: mutedStyle,
      grey: mutedStyle,
      default: defaultStyle,
    },
  })
);
StyledBadge.defaultProps = {
  variant: 'default',
};
const Badge = ({ style, ...props }: IBadgeProps) => {
  // Color Varients
  let theme = useContext(ThemeContext);
  let structureColor = theme.colors.default[2];
  if (props.variant) {
    switch (props.variant) {
      case 'success':
      case 'green':
        structureColor = theme.colors.success[2];
        break;
      case 'danger':
      case 'red':
        structureColor = theme.colors.danger[2];
        break;
      case 'warning':
      case 'yellow':
        structureColor = theme.colors.warning[2];
        break;
      case 'light':
      case 'white':
        structureColor = theme.colors.light[2];
        break;
      case 'dark':
      case 'black':
        structureColor = theme.colors.dark[2];
        break;
      case 'muted':
      case 'secondary':
      case 'grey':
        structureColor = theme.colors.muted[2];
        break;
      default:
        structureColor = theme.colors.default[2];
    }
  }
  //   Varients
  let outlineStyle = {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: props.variant ? structureColor : theme.colors.muted[1],
    color: props.variant ? structureColor : theme.colors.muted[1],
  };
  let solidStyle = {
    backgroundColor: props.variant ? structureColor : theme.colors.muted[1],
    color: 'white',
  };
  let subtleStyle = {}; // Default when no variantType is provided

  let variantType = subtleStyle;
  if (props.variantType) {
    switch (props.variantType) {
      case 'outline':
        variantType = outlineStyle;
        break;
      case 'solid':
        variantType = solidStyle;
        break;
      case 'subtle':
        variantType = subtleStyle;
        break;
      default:
        variantType = subtleStyle;
    }
  }
  let text = props.children;
  if (text !== undefined) {
    props.children = text.toUpperCase();
  }
  let computedStyle: any = style;

  computedStyle = StyleSheet.flatten([
    style,
    variantType,
    { fontSize: props.fontSize ? props.fontSize : 18, fontWeight: '600' },
  ]);

  return <StyledBadge px="2" rounded="2" {...props} style={computedStyle} />;
};

export default Badge;
