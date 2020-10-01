import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
  TouchableHighlight,
  Text,
} from 'react-native';
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
  height,
  variant,
  borderRadius,
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
import theme from '../../../theme';
import Spinner from '../../primitives/Spinner';
type SpaceType = 'xs' | 'sm' | 'md' | 'lg';
export type IButtonProps = ViewProps &
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
    style?: ViewStyle;
    children?: any;
    highlight?: number | undefined | 0 | 1 | 0.5 | 0.25 | 0.75;
    highlightColor?: string | undefined;
    colorScheme?: string | undefined;
    variant?: string | undefined;
    isLoading?: any | undefined;
    size?: SpaceType | string | undefined;
    onClick?: any | undefined;
  };

let successStyle = {
  backgroundColor: theme.colors.success[2],
  borderColor: theme.colors.success[2],
  color: theme.colors.success[1],
};
let dangerStyle = {
  backgroundColor: theme.colors.danger[2],
  borderColor: theme.colors.danger[2],
  color: theme.colors.danger[1],
};
let warningStyle = {
  backgroundColor: theme.colors.warning[2],
  borderColor: theme.colors.warning[2],
  color: theme.colors.warning[1],
};
let darkStyle = {
  backgroundColor: theme.colors.dark[2],
  borderColor: theme.colors.dark[2],
  color: theme.colors.dark[1],
};
let lightStyle = {
  backgroundColor: theme.colors.light[2],
  borderColor: theme.colors.light[2],
  color: theme.colors.light[1],
};
let mutedStyle = {
  backgroundColor: theme.colors.muted[2],
  borderColor: theme.colors.muted[2],
  color: theme.colors.muted[1],
};
let defaultStyle = {
  backgroundColor: theme.colors.indigo[4],
  borderColor: theme.colors.indigo[4],
  color: theme.colors.indigo[1],
};

let outlineStyle = {
  backgroundColor: 'transparent',
  borderWidth: '1px',
  // borderColor: 'white',
};
let ghostStyle = {
  backgroundColor: 'transparent',
  borderWidth: '0px',
  // borderColor: 'white',
};
let linkStyle = {
  backgroundColor: 'transparent',
  borderWidth: '0px',
  // borderColor: 'white',
};
let solidStyle = {
  color: 'white',
};

const StyledView = styled(View)<{
  colorScheme?: string | undefined;
  variant?: string | undefined;
}>(
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
    prop: 'colorScheme',
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
    variants: {
      outline: outlineStyle,
      ghost: ghostStyle,
      solid: solidStyle,
      link: linkStyle,
    },
  })
);
StyledView.defaultProps = {
  colorScheme: 'default',
  variant: 'solid',
};
const StyledButton = styled(TouchableHighlight)<IButtonProps>(
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
const Button = ({
  style,
  children,
  highlight,
  highlightColor,
  variant,
  colorScheme,
  isLoading,
  size,
  p,
  pr,
  pt,
  pb,
  pl,
  px,
  py,
  rounded,
  onClick,
  ...props
}: IButtonProps) => {
  let spaceValue = 0;
  if (size) {
    switch (size) {
      case 'xs':
        spaceValue = 0;
        break;
      case 'sm':
        spaceValue = 2;
        break;
      case 'md':
        spaceValue = 3;
        break;
      case 'lg':
        spaceValue = 4;
        break;
      default:
        spaceValue = 2;
        break;
    }
  } else {
    spaceValue = 2;
  }

  let lightBgColor: Array<string> = [];
  if (colorScheme) {
    switch (colorScheme) {
      case 'success':
      case 'green':
        lightBgColor = [theme.colors.success[0], theme.colors.success[1]];
        break;
      case 'danger':
      case 'red':
        lightBgColor = [theme.colors.danger[0], theme.colors.danger[1]];
        break;
      case 'warning':
      case 'yellow':
        lightBgColor = [theme.colors.warning[0], theme.colors.warning[1]];
        break;
      case 'light':
      case 'white':
        lightBgColor = [theme.colors.light[0], theme.colors.light[1]];
        break;
      case 'dark':
      case 'black':
        lightBgColor = [theme.colors.dark[0], theme.colors.dark[1]];
        break;
      case 'muted':
      case 'secondary':
      case 'grey':
        lightBgColor = [theme.colors.muted[0], theme.colors.success[1]];
        break;
      default:
        lightBgColor = [theme.colors.default[0], theme.colors.default[1]];
    }
  }
  let textColor = 'white';
  if (variant == 'ghost' || variant == 'outline' || variant == 'link') {
    highlightColor = highlightColor ? highlightColor : lightBgColor[0];
    textColor = lightBgColor[1];
  }
  const defaultOnPress = () => {};
  let computedStyle: any = style;
  computedStyle = StyleSheet.flatten([
    style,
    {
      opacity: isLoading ? 0.5 : 1,
      alignItems: 'center',
      borderRadius: rounded ? rounded : 3,
      borderColor: textColor,
    },
  ]);
  return (
    <StyledButton
      disabled={isLoading ? true : false}
      onPress={onClick ? onClick : defaultOnPress}
      activeOpacity={highlight}
      underlayColor={highlightColor}
      style={{ borderRadius: 3 }}
      {...props}
    >
      <StyledView
        p={p ? p : 2}
        pl={pl ? pl : ''}
        pr={pr ? pr : ''}
        pb={pb ? pb : ''}
        pt={pt ? pt : ''}
        px={px ? px : ''}
        py={py ? py : ''}
        style={computedStyle}
        colorScheme={colorScheme}
        variant={variant}
      >
        {isLoading ? (
          <Spinner />
        ) : (
          <Text
            style={{
              color: textColor,
              fontSize: theme.fontSizes[spaceValue],
              textDecorationLine: variant == 'link' ? 'underline' : 'none',
            }}
          >
            {children}
          </Text>
        )}
      </StyledView>
    </StyledButton>
  );
};

export default Button;
