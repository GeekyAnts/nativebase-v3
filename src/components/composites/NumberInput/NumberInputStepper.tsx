import React from 'react';
import { VStack } from '../../primitives';
import { Divider } from '../../composites';
import type { INumberInputFieldProps } from './props';

const NumberInputStepper = ({ children, ...props }: INumberInputFieldProps) => {
  return (
    <VStack divider={<Divider />} {...props}>
      {children}
    </VStack>
  );
};

export default NumberInputStepper;
