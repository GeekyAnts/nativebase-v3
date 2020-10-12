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

export type TextProps = ColorProps &
  SpaceProps &
  PositionProps &
  TypographyProps & {
    children?: JSX.Element[] | JSX.Element | string | undefined;
    fontSize?: string | number;
    numberOfLines?: number;
    style?: any;
    bold?: boolean;
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
const NBText = ({ children, style, fontSize, ...props }: TextProps) => {
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

  if (props.bold) style = StyleSheet.compose(addonStyle.boldStyle, style);

  if (props.italic) style = StyleSheet.compose(addonStyle.italicStyle, style);

  if (props.underline)
    style = StyleSheet.compose(addonStyle.underlineStyle, style);

  if (props.strikeThrough)
    style = StyleSheet.compose(addonStyle.strikeThroughStyle, style);

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
      fontSize = theme.fontSizes[5] + 6;
      break;
    case '4xl':
      fontSize = theme.fontSizes[5] + 12;
      break;
    case '5xl':
      fontSize = theme.fontSizes[5] + 20;
      break;
    case '6xl':
      fontSize = theme.fontSizes[5] + 28;
      break;
  }

  return (
    <Text style={style} fontSize={fontSize} {...props}>
      {children}
    </Text>
  );
};

export default NBText;
