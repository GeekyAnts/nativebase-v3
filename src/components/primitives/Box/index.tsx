import React, { forwardRef } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
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
import { usePropsConfig } from '../../../theme/hooks';

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

const Box = (
  {
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
  }: IBoxProps,
  ref: any
) => {
  let newProps = usePropsConfig('Box', props);

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
  return (
    <StyledBox ref={ref} {...newProps}>
      {addTextAndPropsToStrings(children, textProps)}
    </StyledBox>
  );
};

export { IBoxProps } from './props';

export default forwardRef(Box);
