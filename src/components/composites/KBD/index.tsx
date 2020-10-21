import React, { useContext } from 'react';
import { StyleSheet, Text, Platform, View } from 'react-native';
import styled from 'styled-components/native';
import { ThemeContext } from '../../../theme';
import { border, color, flexbox, layout, space } from 'styled-system';
import {
  customBorder,
  customBackground,
  customOutline,
  customLayout,
  customExtra,
  customShadow,
} from '../../../utils/customProps';
import { shadows } from '../../../styles';
import type { IKbdProps } from './props';

const StyledKbd = styled(View)<IKbdProps>(
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
const Kbd = ({ style, shadow, children, ...props }: IKbdProps) => {
  const theme = useContext(ThemeContext);
  let computedStyle: any = style;
  computedStyle = StyleSheet.flatten([
    style,
    {
      backgroundColor: theme.colors.muted[0],
      borderColor: theme.colors.muted[1],
      borderWidth: 2,
      borderBottomWidth: 5,
      borderRadius: 5,
    },
    shadows[shadow ? shadow : 2],
  ]);

  return (
    <StyledKbd px={2} {...props} style={computedStyle}>
      <Text
        style={{
          fontWeight: '700',
          fontSize: props.fontSize ? props.fontSize : theme.fontSizes['sm'],
          fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
        }}
      >
        {children}
      </Text>
    </StyledKbd>
  );
};

export default Kbd;
export { IKbdProps } from './props';
