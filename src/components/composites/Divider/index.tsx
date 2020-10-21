import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
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

import type { IDividerProps } from './props';

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
const Divider = ({ style, orientation, ...props }: IDividerProps) => {
  let computedStyle: ViewStyle = StyleSheet.flatten([
    style,
    {
      borderWidth: 1,
      opacity: 0.6,
    },
    orientation === 'vertical'
      ? {
          width: 0,
          height: '100%',
        }
      : {
          width: '100%',
          height: 0,
        },
  ]);
  return <StyledDivider {...props} style={computedStyle} />;
};

export default Divider;
export type { IDividerProps };
