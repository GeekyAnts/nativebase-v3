import React from 'react';
import { View, ViewProps, ViewStyle, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { shadows } from '../../../styles';
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

export type IBoxProps = ViewProps &
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
    children?: JSX.Element | JSX.Element[] | string;
    shadow?: number | undefined;
  };

const StyledBox = styled(View)<IBoxProps>(
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
const Box = ({ shadow, ...props }: IBoxProps) => {
  let computedStyle: any = props.style;
  let shadowInd: number = shadow ? (shadow > 9 ? 9 : shadow) : 2;
  computedStyle = StyleSheet.flatten([
    props.style,
    shadow ? shadows[shadowInd] : {},
  ]);
  return <StyledBox {...props} style={computedStyle} />;
};

export default Box;
