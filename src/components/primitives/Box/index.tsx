import React from 'react';
import { View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { shadows } from '../../../styles';
import { addTextAndPropsToStrings } from '../../../utils';
import {
  border,
  color,
  flexbox,
  layout,
  space,
  typography,
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

import type { IBoxProps } from './props';

const StyledBox = styled(View)<IBoxProps>(
  color,
  space,
  layout,
  flexbox,
  border,
  typography,
  customBorder,
  customBackground,
  customOutline,
  customShadow,
  customExtra,
  customTypography,
  customLayout
);

const Box = ({
  shadow,
  children,
  fontSize,
  color,
  textDecoration,
  txtDecor,
  wordBreak,
  textOverflow,
  textTransform,
  whiteSpace,
  overflowWrap,
  fontFamily,
  fontWeight,
  ...props
}: IBoxProps) => {
  // TextProps that contain all the props related to text and gets added to child text components using addTextAndPropsToStrings() method
  const textProps = {
    fontWeight: fontWeight,
    fontFamily: fontFamily,
    fontSize: fontSize,
    color: color,
    textDecoration: textDecoration,
    txtDecor: txtDecor,
    wordBreak: wordBreak,
    textOverflow: textOverflow,
    textTransform: textTransform,
    whiteSpace: whiteSpace,
    overflowWrap: overflowWrap,
  };
  let computedStyle: any = props.style;

  // Check Shadow Index to apply shadow from theme Shadows array
  let shadowInd: number = shadow
    ? shadow > shadows.length - 1
      ? shadows.length - 1
      : shadow
    : 2; // By default shadow index is set to 2

  computedStyle = StyleSheet.flatten([
    props.style,
    shadow ? shadows[shadowInd] : {},
  ]);
  return (
    <StyledBox {...props} style={computedStyle}>
      {addTextAndPropsToStrings(children, textProps)}
    </StyledBox>
  );
};

export { IBoxProps } from './props';

export default Box;
