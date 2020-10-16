import { isNil } from 'lodash';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import styled from 'styled-components/native';
import { border, color, flexbox, layout, space } from 'styled-system';
import {
  customBorder,
  customBackground,
  customOutline,
  customLayout,
  customExtra,
  customShadow,
} from '../../../utils/customProps';
import type { IWrapProps } from './props';

const StyledWrap = styled(View)<IWrapProps>(
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
const Wrap = ({
  style,
  direction,
  align,
  justify,
  basis,
  grow,
  spacing,
  children,
  ...props
}: IWrapProps) => {
  let computedStyle: any = style;
  computedStyle = StyleSheet.flatten([
    style,
    {
      display: 'flex',
      flexDirection: direction ? direction : 'column',
      alignItems: align,
      justifyContent: justify,
      flexWrap: 'wrap',
      flexBasis: basis,
      flexGrow: grow,
    },
  ]);
  return (
    <StyledWrap {...props} style={computedStyle}>
      {isNil(spacing)
        ? children
        : React.Children.map(children, (child: any) => {
            return React.cloneElement(
              child,
              { ...props, style: { margin: spacing } },
              child.props.children
            );
          })}
    </StyledWrap>
  );
};

export default Wrap;
export { IWrapProps } from './props';
