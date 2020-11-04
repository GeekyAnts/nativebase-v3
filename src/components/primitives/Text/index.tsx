import styled from 'styled-components/native';
import * as React from 'react';
import {
  color,
  position,
  space,
  typography,
  layout,
  flexbox,
  border,
} from 'styled-system';

import {
  customBorder,
  customBackground,
  customOutline,
  customLayout,
  customExtra,
  customShadow,
  customTypography,
} from '../../../utils/customProps';
import type { ITextProps } from './props';
import { StyleSheet, Text as NativeText } from 'react-native';
import { usePropsConfig } from '../../../theme';

const NBText = ({
  children,
  style,
  isTruncated,
  noOfLines,
  ...props
}: ITextProps) => {
  const newProps = usePropsConfig('Text', props);
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
    // TODO: fontSize should calclated in the theme. Currently adding static size
    subStyle: {
      fontSize: 10,
    },
    highlightedStyle: {
      backgroundColor: 'yellow',
    },
  });

  if (props.bold) style = StyleSheet.compose(style, addonStyle.boldStyle);

  if (props.italic) style = StyleSheet.compose(style, addonStyle.italicStyle);

  if (props.underline)
    style = StyleSheet.compose(style, addonStyle.underlineStyle);

  if (props.strikeThrough)
    style = StyleSheet.compose(style, addonStyle.strikeThroughStyle);

  if (props.sub) style = StyleSheet.compose(style, addonStyle.subStyle);

  if (props.highlight)
    style = StyleSheet.compose(style, addonStyle.highlightedStyle);

  return (
    <NativeText
      style={style}
      numberOfLines={noOfLines ? noOfLines : isTruncated ? 1 : 999}
      {...newProps}
    >
      {children}
    </NativeText>
  );
};

const StyledText = styled(NBText)<ITextProps>(
  color,
  space,
  position,
  layout,
  flexbox,
  border,
  typography,
  customBorder,
  customBackground,
  customOutline,
  customShadow,
  customExtra,
  customLayout,
  customTypography
);
StyledText.defaultProps = {
  bold: false,
  italic: false,
  underline: false,
  strikeThrough: false,
};

const Text = ({ children, ...props }: ITextProps) => {
  return <StyledText {...props}>{children}</StyledText>;
};

export default Text;
export type { ITextProps };
