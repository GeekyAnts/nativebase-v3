import styled from 'styled-components/native';
import * as React from 'react';
import {
  ColorProps,
  SpaceProps,
  TypographyProps,
  PositionProps,
  color,
  position,
  space,
  typography,
} from 'styled-system';
import { theme } from '../../../theme';
import { StyleSheet } from 'react-native';
const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', 'xl'];

export type TextProps = ColorProps &
  SpaceProps &
  PositionProps &
  TypographyProps & {
    children?: React.ReactNode | string | undefined;
    fontSize?: typeof sizes[number] | number;
    noOfLines?: number;
    style?: any;
    bold?: boolean;
    isTruncated?: any;
    italic?: boolean;
    underline?: boolean;
    strikeThrough?: boolean;
  };

const Text = styled.Text<TextProps>`
  ${position}
  ${color}
  ${space}
  ${typography}
`;
Text.defaultProps = {
  bold: false,
  italic: false,
  underline: false,
  strikeThrough: false,
};

const NBText = ({
  children,
  style,
  isTruncated,
  fontSize,
  noOfLines,
  ...props
}: TextProps) => {
  const addonStyle = StyleSheet.create({
    boldStyle: {
      fontWeight: 'bold',
    },
    italicStyle: {
      fontStyle: 'italic',
    },
    underlineStyle: {
      textDecorationLine: 'underline',
    },
    strikeThroughStyle: {
      textDecorationLine: 'line-through',
    },
  });

  if (props.bold) style = StyleSheet.compose(style, addonStyle.boldStyle);

  if (props.italic) style = StyleSheet.compose(style, addonStyle.italicStyle);

  if (props.underline)
    style = StyleSheet.compose(style, addonStyle.underlineStyle);

  if (props.strikeThrough)
    style = StyleSheet.compose(style, addonStyle.strikeThroughStyle);

  switch (fontSize) {
    case 'xs':
      fontSize = theme.fontSizes[0];
      break;
    case 'sm':
      fontSize = theme.fontSizes[1];
      break;
    case 'md':
      fontSize = theme.fontSizes[2];
      break;
    case 'lg':
      fontSize = theme.fontSizes[3];
      break;
    case 'xl':
      fontSize = theme.fontSizes[4];
      break;
    case '2xl':
      fontSize = theme.fontSizes[5];
      break;
    case '3xl':
      fontSize = theme.fontSizes[6];
      break;
    case '4xl':
      fontSize = theme.fontSizes[6] * 1.2;
      break;
    case '5xl':
      fontSize = theme.fontSizes[6] * 1.6;
      break;
    case '6xl':
      fontSize = theme.fontSizes[6] * 2.1333333;
      break;
    default:
      break;
  }
  return (
    <Text
      style={style}
      fontSize={fontSize}
      numberOfLines={noOfLines ? noOfLines : isTruncated ? 1 : 999}
      {...props}
    >
      {children}
    </Text>
  );
};

export default NBText;
