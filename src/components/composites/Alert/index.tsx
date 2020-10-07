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
import { theme } from '../../../theme';

export type IAlertProps = TextProps &
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
    status?: string | undefined;
    children?: JSX.Element | JSX.Element[] | string | any;
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

const StyledAlert = styled(Text)<IAlertProps>(
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
    prop: 'status',
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
StyledAlert.defaultProps = {
  status: 'default',
};
const Alert = ({ style, children, ...props }: IAlertProps) => {
  let structureColor = theme.colors.default[2];
  let lightColor = 'white';
  if (props.status) {
    switch (props.status) {
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
        lightColor = theme.colors.dark[2];
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
  let leftAccentStyle = {
    borderLeftWidth: 4,
    borderLeftColor: props.variant ? structureColor : theme.colors.muted[2],
  };
  let topAccentStyle = {
    borderTopWidth: 4,
    borderTopColor: props.variant ? structureColor : theme.colors.muted[2],
  };
  let solidStyle = {
    backgroundColor: props.variant ? structureColor : theme.colors.muted[2],
    color: lightColor === 'white' ? 'white' : lightColor,
  };
  let subtleStyle = {}; // Default when no variantType is provided

  let variantType = subtleStyle;
  if (props.variant) {
    switch (props.variant) {
      case 'left-accent':
        variantType = leftAccentStyle;
        break;
      case 'solid':
        variantType = solidStyle;
        break;
      case 'subtle':
        variantType = subtleStyle;
        break;
      case 'top-accent':
        variantType = topAccentStyle;
        break;
      default:
        variantType = topAccentStyle;
    }
  }

  let computedStyle: any = style;
  computedStyle = StyleSheet.flatten([
    style,
    {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      fontSize: props.fontSize ? props.fontSize : 15,
    },
    variantType,
  ]);

  return (
    <StyledAlert px="2" py="2" rounded="2px" {...props} style={computedStyle}>
      {children}
    </StyledAlert>
  );
};

export default Alert;
