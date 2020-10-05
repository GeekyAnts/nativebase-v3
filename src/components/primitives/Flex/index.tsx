import React from 'react';
import { StyleSheet, View, ViewProps, ViewStyle } from 'react-native';
import styled from 'styled-components/native';
import type * as CSS from 'csstype';
import {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  border,
  color,
  flexbox,
  layout,
  space,
} from 'styled-system';
import {
  customBorder,
  customBorderProps,
  customBackground,
  customBackgroundProps,
  customOutline,
  customOutlineProps,
  customLayout,
  customLayoutProps,
  customExtra,
  customExtraProps,
  customShadowProps,
  customShadow,
} from '../../../utils/customProps';

export type IFlexProps = ViewProps &
  ColorProps &
  SpaceProps &
  LayoutProps &
  FlexboxProps &
  customBorderProps &
  customExtraProps &
  customOutlineProps &
  customShadowProps &
  customLayoutProps &
  customBackgroundProps &
  BorderProps & {
    style?: ViewStyle;
    children?: JSX.Element | JSX.Element[];
    direction?: CSS.Property.FlexDirection | undefined;
    align?: CSS.Property.AlignItems | undefined;
    justify?: CSS.Property.JustifyContent | undefined;
    wrap?: CSS.Property.FlexWrap | undefined;
    basis?: CSS.Property.FlexBasis | undefined;
    grow?: CSS.Property.FlexGrow | undefined;
  };

const StyledFlex = styled(View)<IFlexProps>(
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
const Flex = ({
  style,
  direction,
  align,
  justify,
  wrap,
  basis,
  grow,
  ...props
}: IFlexProps) => {
  let computedStyle: any = style;
  computedStyle = StyleSheet.flatten([
    style,
    {
      display: 'flex',
      flexDirection: direction ? direction : 'row',
      alignItems: align,
      justifyContent: justify,
      flexWrap: wrap,
      flexBasis: basis,
      flexGrow: grow,
    },
  ]);

  return <StyledFlex {...props} style={computedStyle} />;
};

export default Flex;
