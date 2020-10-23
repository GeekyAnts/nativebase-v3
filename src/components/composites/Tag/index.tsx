import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { variant } from 'styled-system';
import { CloseButton, Box, IIconProps, Icon, Text, TextProps } from '../../..';
import { ThemeContext } from '../../../theme';
import type { ICloseButtonProps } from '../CloseButton/props';
import type { ITagProps } from './props';
import * as StyleVariants from './variants';
const StyledTag = styled(Box)<ITagProps>(
  variant({
    prop: 'colorScheme',
    variants: {
      success: StyleVariants.successStyle,
      green: StyleVariants.successStyle,
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
      grey: StyleVariants.mutedStyle,
      default: StyleVariants.defaultStyle,
    },
  })
);
StyledTag.defaultProps = {
  colorScheme: 'default',
};
export const TagLabel = (props: TextProps) => {
  return <Text {...props} />;
};
export const TagLeftIcon = (props: IIconProps) => {
  return <Icon mr={2} {...props} />;
};
export const TagRightIcon = (props: IIconProps) => {
  return <Icon ml={2} {...props} />;
};
export const TagCloseButton = ({
  style,
  ...props
}: ICloseButtonProps & { fontSize?: number }) => {
  let computedStyle: any = style;
  computedStyle = StyleSheet.flatten([style, { fontWeight: '700' }]);
  return (
    <CloseButton
      ml={2}
      fontSize={props.fontSize}
      style={computedStyle}
      {...props}
    />
  );
};
const Tag = ({ style, size, ...props }: ITagProps) => {
  const theme = React.useContext(ThemeContext);
  let defaultFontSize: any = theme.fontSizes.md;
  if (size) {
    if (typeof size === 'string') {
      switch (size) {
        case 'xs':
          defaultFontSize = theme.fontSizes.xs;
          break;
        case 'sm':
          defaultFontSize = theme.fontSizes.sm;
          break;
        case 'md':
          defaultFontSize = theme.fontSizes.md;
          break;
        case 'lg':
          defaultFontSize = theme.fontSizes.lg;
          break;
        case 'xl':
          defaultFontSize = theme.fontSizes.xl;
          break;
        case '2xl':
          defaultFontSize = theme.fontSizes['2xl'];
          break;
        case '3xl':
          defaultFontSize = theme.fontSizes['3xl'];
          break;
        case '4xl':
          defaultFontSize = theme.fontSizes['4xl'];
          break;
        default:
          defaultFontSize = theme.fontSizes.md;
      }
    } else {
      defaultFontSize = size;
    }
  }
  let fontColor = props.color;
  let structureColor = theme.colors.default[2];
  if (props.colorScheme) {
    switch (props.colorScheme) {
      case 'success':
      case 'green':
        structureColor = theme.colors.success[2];
        fontColor = theme.colors.success[1];
        break;
      case 'danger':
      case 'red':
        structureColor = theme.colors.danger[2];
        fontColor = theme.colors.danger[1];
        break;
      case 'warning':
      case 'yellow':
        structureColor = theme.colors.warning[2];
        fontColor = theme.colors.warning[1];
        break;
      case 'light':
      case 'white':
        structureColor = theme.colors.light[2];
        fontColor = theme.colors.light[1];
        break;
      case 'dark':
      case 'black':
        structureColor = theme.colors.dark[2];
        fontColor = theme.colors.dark[1];
        break;
      case 'muted':
      case 'secondary':
      case 'grey':
        structureColor = theme.colors.muted[2];
        fontColor = theme.colors.muted[1];
        break;
      default:
        structureColor = theme.colors.default[2];
        fontColor = theme.colors.default[1];
    }
  }
  //   Varients
  let outlineStyle = {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: props.variant ? structureColor : theme.colors.muted[1],
  };
  let solidStyle = {
    backgroundColor: props.variant ? structureColor : theme.colors.muted[1],
  };
  let subtleStyle = {}; // Default when no variantType is provided

  let variantType = subtleStyle;
  if (props.variant) {
    switch (props.variant) {
      case 'outline':
        variantType = outlineStyle;
        fontColor = props.variant ? structureColor : theme.colors.default[1];
        break;
      case 'solid':
        variantType = solidStyle;
        fontColor = 'white';
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
  ]);

  return (
    <StyledTag
      style={computedStyle}
      px="2"
      rounded="3"
      fontWeight={500}
      fontSize={defaultFontSize}
      color={fontColor}
      {...props}
    />
  );
};

export default Tag;
