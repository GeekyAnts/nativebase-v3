import React from 'react';
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
import { CloseButton, IButtonProps } from '../../..';
import { theme } from '../../../theme';
export type ITagProps = TextProps &
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
    variantType?: string | undefined;
    variant?: string | undefined;
    children?: JSX.Element | JSX.Element[] | string;
    fontSize?: number | undefined;
    tagSize?: string | undefined;
  };
let successStyle = {
  backgroundColor: theme.colors.success[0],
  color: theme.colors.success[1],
};
let dangerStyle = {
  backgroundColor: theme.colors.danger[0],
  color: theme.colors.danger[1],
};
let warningStyle = {
  backgroundColor: theme.colors.warning[0],
  color: theme.colors.warning[1],
};
let darkStyle = {
  backgroundColor: theme.colors.dark[0],
  color: theme.colors.dark[1],
};
let lightStyle = {
  backgroundColor: theme.colors.light[0],
  color: theme.colors.light[1],
};
let mutedStyle = {
  backgroundColor: theme.colors.muted[0],
  color: theme.colors.muted[1],
};
let defaultStyle = {
  backgroundColor: theme.colors.default[0],
  color: theme.colors.default[1],
};

const StyledTag = styled(Text)<ITagProps>(
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
    prop: 'variant',
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
  }),
  variant({
    prop: 'tagSize',
    variants: {
      '2xl': { fontSize: theme.fontSizes['2xl'] },
      xl: { fontSize: theme.fontSizes.xl },
      lg: { fontSize: theme.fontSizes.lg },
      md: { fontSize: theme.fontSizes.md },
      sm: { fontSize: theme.fontSizes.sm },
      xsm: { fontSize: theme.fontSizes.xs },
    },
  })
);
StyledTag.defaultProps = {
  variant: 'default',
  tagSize: '2xl',
};
export const TagCloseButton = (props: IButtonProps) => {
  let computedStyle: any = props.style;
  computedStyle = StyleSheet.flatten([props.style, { fontWeight: '700' }]);
  return <CloseButton marginLeft="auto" mr={2} style={computedStyle} />;
};
const Tag = ({ style, ...props }: ITagProps) => {
  // Color Varients

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
    border:
      '1px solid ' + (props.variant ? structureColor : theme.colors.muted[1]),
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

  let computedStyle: any = style;

  computedStyle = StyleSheet.flatten([
    style,
    { display: 'flex', alignItems: 'center', flexDirection: 'row' },
    variantType,
    { fontWeight: '500' },
  ]);

  return <StyledTag px="2" rounded="2" {...props} style={computedStyle} />;
};

export default Tag;
