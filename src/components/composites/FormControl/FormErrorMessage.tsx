import React from 'react';
import styled from 'styled-components/native';
import { space } from 'styled-system';
import { Box, ThemeContext } from 'native-base';
import { FormControlContext } from './FormControl';
import type { IFormErrorMessageProps, IFormControlContext } from './props';

const NBFormErrorMessage = ({ children, ...props }: IFormErrorMessageProps) => {
  const { isInvalid }: IFormControlContext = React.useContext(
    FormControlContext
  );

  const theme = React.useContext(ThemeContext);
  return isInvalid ? (
    <Box {...props} fontSize="xs" color={theme.colors.red[4]}>
      {children}
    </Box>
  ) : null;
};

const StyledFormErrorMessage = styled(NBFormErrorMessage)<
  IFormErrorMessageProps
>(space);
const FormErrorMessage = ({ children, ...props }: IFormErrorMessageProps) => {
  return <StyledFormErrorMessage {...props}>{children}</StyledFormErrorMessage>;
};

export default FormErrorMessage;
