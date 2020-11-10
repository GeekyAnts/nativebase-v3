import React from 'react';
import { VStack, Divider } from '@native-base/v3';
import type { INumberInputFieldProps } from './props';

const NumberInputStepper = ({ children, ...props }: INumberInputFieldProps) => {
  return (
    <VStack divider={<Divider />} {...props}>
      {children}
    </VStack>
  );
};

export default NumberInputStepper;
