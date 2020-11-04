import React from 'react';
import { View } from 'react-native';
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
import { usePropsConfig } from '../../../theme';
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
  basis,
  grow,
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
  let newProps = usePropsConfig('Flex', props);

  return (
    <StyledFlex
      {...newProps}
      flexDirection={direction}
      alignItems={align}
      justifyContent={justify}
      flexGrow={grow}
      flexBasis={basis}
      style={style}
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
