import React from 'react';
import { StyleSheet, View, ViewProps, ViewStyle } from 'react-native';
import styled from 'styled-components/native';
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

export type IDividerProps = ViewProps &
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
    orientation?: 'vertical' | 'horizontal' | undefined;
    dividerColor?: string | undefined;
  };

const StyledDivider = styled(View)<IDividerProps>(
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
const Divider = ({
  style,
  orientation,
  dividerColor,
  ...props
}: IDividerProps) => {
  let computedStyle: any = style;
  let divColor: string = dividerColor ? dividerColor : 'rgb(236, 236, 236)';
  if (orientation == 'horizontal' || !orientation) {
    computedStyle = StyleSheet.flatten([
      style,
      {
        width: '100%',
        height: 0,
        borderWidth: 1,
        borderColor: divColor,
      },
    ]);
  }
  if (orientation == 'vertical') {
    computedStyle = StyleSheet.flatten([
      style,
      {
        width: 0,
        height: '100%',
        borderWidth: 1,
        borderColor: divColor,
      },
    ]);
  }
  return <StyledDivider {...props} style={computedStyle} />;
};

export default Divider;
