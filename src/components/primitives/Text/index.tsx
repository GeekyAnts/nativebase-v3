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

const StyledText = styled.Text<TextProps>`
  ${position}
  ${color}
  ${space}
  ${typography}
`;
StyledText.defaultProps = {
  bold: false,
  italic: false,
  underline: false,
  strikeThrough: false,
};

const Text = ({
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

  // TODO: replace this, had some typing issues
  if (fontSize && typeof fontSize === 'string' && sizes.includes(fontSize)) {
    // @ts-ignore
    fontSize = theme.fontSizes[fontSize];
  }
  return (
    <StyledText
      style={style}
      fontSize={fontSize}
      numberOfLines={noOfLines ? noOfLines : isTruncated ? 1 : 999}
      {...props}
    >
      {children}
    </StyledText>
  );
};

export default Text;
