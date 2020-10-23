import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import styled from 'styled-components/native';
import { variant } from 'styled-system';
import { Text } from '../../primitives';
import type { ICodeProps } from './props';

const StyledCode = styled(Text)<ICodeProps>(
  variant({
    prop: 'colorScheme',
    scale: 'components.Code.variants',
    variants: {
      default: {},
    },
  })
);
StyledCode.defaultProps = {
  colorScheme: 'default',
  px: 2,
  py: 1,
  borderRadius: 2,
};
const Code = ({ style, ...props }: ICodeProps) => {
  let computedStyle: any = StyleSheet.flatten([
    style,
    {
      fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    },
  ]);

  return <StyledCode {...props} style={computedStyle} />;
};

export { ICodeProps } from './props';
export default Code;
