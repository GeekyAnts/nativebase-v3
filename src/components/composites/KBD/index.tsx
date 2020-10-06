import React from 'react';
import { StyleSheet, Text, TextProps, TextStyle, Platform } from 'react-native';
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
export type IKbdProps = TextProps &
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
    style?: TextStyle;
    ratio?: number;
    children?: string | undefined;
    fontSize?: number | undefined;
  };

const StyledKbd = styled(Text)<IKbdProps>(
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
const Kbd = ({ style, ...props }: IKbdProps) => {
  let computedStyle: any = style;

  computedStyle = StyleSheet.flatten([
    style,
    // colorVarient,
    {
      width: 'auto',
      backgroundColor: '#edf2f7',
      fontWeight: '600',
      fontSize: props.fontSize ? props.fontSize : 15,
      fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
      resizeMode: 'contain',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,
    },
  ]);

  return (
    <StyledKbd px="2" py={1} rounded="2" {...props} style={computedStyle} />
  );
};

export default Kbd;
