import React from 'react';
import { Box } from '../../primitives';
import { useToken } from '../../../theme';
import { FormControlContext } from './FormControl';
import type { IFormErrorMessageProps, IFormControlContext } from './props';

const FormErrorMessage = ({ children, ...props }: IFormErrorMessageProps) => {
  const { isInvalid }: IFormControlContext = React.useContext(
    FormControlContext
  );
  const color = useToken('colors', 'red.4');
  return isInvalid ? (
    <Box {...props} fontSize="xs" color={color}>
      {children}
    </Box>
  ) : null;
};

export default FormErrorMessage;
