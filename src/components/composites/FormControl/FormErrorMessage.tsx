import React from 'react';
import { Box } from '../../primitives';
import { useTheme } from '../../../theme';
import { FormControlContext } from './FormControl';
import type { IFormErrorMessageProps, IFormControlContext } from './props';

const FormErrorMessage = ({ children, ...props }: IFormErrorMessageProps) => {
  const { isInvalid }: IFormControlContext = React.useContext(
    FormControlContext
  );
  const theme = useTheme();
  return isInvalid ? (
    <Box {...props} fontSize="xs" color={theme.colors.red[4]}>
      {children}
    </Box>
  ) : null;
};

export default FormErrorMessage;
