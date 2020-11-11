import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { border, color, flexbox, layout, space, variant } from 'styled-system';
import {
  customBorder,
  customBackground,
  customOutline,
  customLayout,
  customExtra,
  customShadow,
} from '../../../utils/customProps';
import { useTheme } from '../../../theme';
import { CloseButton, Icon } from '../../../index';
import type { IAlertProps } from './props';
export type { IAlertProps };
export { default as AlertCloseButton } from './AlertCloseButton';
export { default as AlertDescription } from './AlertDescript';
export { default as AlertIcon } from './AlertIcon';
export { default as AlertTitle } from './AlertTitle';

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
const getAlertIcon = (status: string | undefined) => {
  return (
    <Icon
      style={
        status ? { backgroundColor: 'black' } : { backgroundColor: 'black' }
      }
      // size={30}
      type="MaterialIcons"
      name="menu"
    />
  );
};
const childStyling = (
  props: any,
  children: any,
  statusStyle: any,
  variantStyle: any,
  fontSize: string | number = -1
) => {
  let computedStyle: any = {};
  computedStyle = StyleSheet.flatten([
    { color: statusStyle },
    props.variant === 'solid' ? { color: 'white' } : {},
    variantStyle,
    fontSize !== -1 ? { fontSize: fontSize } : {},
  ]);
  return React.Children.map(children, (child: any) =>
    React.cloneElement(child, {
      style: computedStyle,
    })
  );
};

const StyledAlert = styled(View)<IAlertProps>(
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
const Alert = ({ style, ...props }: IAlertProps) => {
  const theme = useTheme();
  let structureColor = theme.colors.default[2];
  let childStatusStyle: any;
  let variantStyle;
  let lightColor = 'white';
  if (props.status) {
    switch (props.status) {
      case 'success':
      case 'green':
        childStatusStyle = theme.colors.success[1];
        structureColor = theme.colors.success[2];
        break;
      case 'danger':
      case 'error':
      case 'red':
        childStatusStyle = theme.colors.danger[1];
        structureColor = theme.colors.danger[2];
        break;
      case 'warning':
      case 'yellow':
        childStatusStyle = theme.colors.warning[1];
        structureColor = theme.colors.warning[2];
        break;
      case 'light':
      case 'white':
        childStatusStyle = theme.colors.light[1];
        structureColor = theme.colors.light[2];
        lightColor = theme.colors.dark[2];
        break;
      case 'dark':
      case 'black':
        childStatusStyle = theme.colors.dark[1];
        structureColor = theme.colors.dark[2];
        break;
      case 'muted':
      case 'secondary':
      case 'grey':
        childStatusStyle = theme.colors.muted[1];
        structureColor = theme.colors.muted[2];
        break;
      default:
        childStatusStyle = theme.colors.default[1];
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
        variantStyle = { color: lightColor === 'white' ? 'white' : lightColor };
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
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
    },
    variantType,
  ]);

  let textComponents = [];
  let closeButtonComponent;
  let iconComponent;
  let textSpacingElem = <Text> </Text>;

  for (var ind = 0; ind < props.children.length; ind++) {
    if (
      props.children[ind].type.name === 'AlertTitle' ||
      props.children[ind].type.name === 'AlertDescription'
    ) {
      textComponents.push(textSpacingElem);
      textComponents.push(props.children[ind]);
    }
    if (props.children[ind].type.name === 'AlertIcon') {
      iconComponent = getAlertIcon(props.status);
    }
    if (props.children[ind].type.name === 'AlertCloseButton') {
      closeButtonComponent = (
        <CloseButton
          ml="auto"
          color={props.variant === 'solid' ? 'white' : childStatusStyle}
        />
      );
    }
  }

  return (
    <StyledAlert px="4" py="3" rounded={2} style={computedStyle} {...props}>
      {iconComponent}
      <Text>
        {childStyling(
          props,
          textComponents,
          childStatusStyle,
          variantStyle,
          props.fontSize
        )}
      </Text>
      {closeButtonComponent}
    </StyledAlert>
  );
};

export default Alert;
