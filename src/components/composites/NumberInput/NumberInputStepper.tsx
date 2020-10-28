import React from 'react';
import styled from 'styled-components/native';
import { space } from 'styled-system';
import { Box } from 'native-base';
import type { INumberInputFieldProps } from './props';

const NBNumberInputStepper = ({
  children,
  ...props
}: INumberInputFieldProps) => {
  return (
    <Box borderLeftWidth={1} {...props}>
      {children}
    </Box>
  );
};

const StyledNumberInputStepper = styled(NBNumberInputStepper)<
  INumberInputFieldProps
>(space);
const NumberInputStepper = ({ children, ...props }: INumberInputFieldProps) => {
  return (
    <StyledNumberInputStepper {...props}>{children}</StyledNumberInputStepper>
  );
};

export default NumberInputStepper;
