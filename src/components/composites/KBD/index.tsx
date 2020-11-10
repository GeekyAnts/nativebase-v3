import React from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { usePropsConfig, Box, Text } from '../../..';
import type { IKbdProps } from './props';

const StyledKbd = styled(Box)<IKbdProps>({});
const Kbd = ({ style, textStyle, children, ...props }: IKbdProps) => {
  let newProps = usePropsConfig('Kbd', props);
  let { fontWeight, fontSize, lineHeight, ...viewProps } = newProps;
  const textProps = { fontWeight, fontSize, lineHeight };
  return (
    <StyledKbd {...viewProps} style={style}>
      <Text
        {...textProps}
        fontFamily={
          newProps.fontFamily
            ? newProps.fontFamily
            : Platform.OS === 'ios'
            ? 'Courier'
            : 'monospace'
        }
        style={textStyle}
      >
        {children}
      </Text>
    </StyledKbd>
  );
};

export default Kbd;
export { IKbdProps } from './props';
