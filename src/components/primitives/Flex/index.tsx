import React from 'react';
import { StyleSheet, View } from 'react-native';
import styled from 'styled-components/native';
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
import { shadows } from '../../../styles';
import { addTextAndPropsToStrings } from '../../../utils';

import type { IFlexProps } from './props';

const StyledFlex = styled(View)<IFlexProps>(
  color,
  space,
  layout,
  flexbox,
  border,
  typography,
  customBorder,
  customBackground,
  customOutline,
  customExtra,
  customLayout,
  customTypography
);
const Flex = ({
  style,
  direction,
  align,
  justify,
  wrap,
  basis,
  grow,
  shadow,
  children,
  fontSize,
  color: colorProp,
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
}: IFlexProps) => {
  // TextProps that contain all the props related to text and gets added to child text components using addTextAndPropsToStrings() method
  const textProps = {
    fontWeight,
    fontFamily,
    fontSize,
    color: colorProp,
    textDecoration,
    txtDecor,
    wordBreak,
    textOverflow,
    textTransform,
    whiteSpace,
    overflowWrap,
  };

  // Check Shadow Index to apply shadow from theme Shadows array
  let shadowInd: number | (string & {}) = shadow
    ? shadow > shadows.length - 1
      ? shadows.length - 1
      : shadow
    : 2; // By default shadow index is set to 2

  let computedStyle: any = style;
  computedStyle = StyleSheet.flatten([
    style,
    {
      display: 'flex',
      alignItems: align,
      justifyContent: justify,
      flexWrap: wrap,
      flexBasis: basis,
      flexGrow: grow,
    },
    shadow ? shadows[shadowInd] : {},
  ]);

  return (
    <StyledFlex
      flexDirection={direction ? direction : 'column'}
      {...props}
      style={computedStyle}
    >
      {addTextAndPropsToStrings(children, textProps)}
    </StyledFlex>
  );
};

const StyledSpacer = styled(View)<IFlexProps>(
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

//Spacer Component that adds space between components where it is placed
export const Spacer = (props: any) => {
  return <StyledSpacer flexGrow={1} {...props} />;
};

export { IFlexProps } from './props';
export default Flex;
