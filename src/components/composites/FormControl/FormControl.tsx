import React from 'react';
import styled from 'styled-components/native';
import { Box } from 'native-base';
import { space } from 'styled-system';
import type { IFormControlProps } from './props';

export const FormControlContext = React.createContext({});
const NBFormControl = ({
  children,
  isInvalid,
  isRequired,
  isDisabled,
  isReadOnly,
  ...props
}: IFormControlProps) => {
  return (
    <FormControlContext.Provider
      value={{
        isInvalid,
        isRequired,
        isDisabled,
        isReadOnly,
      }}
    >
      <Box width="100%" {...props}>
        {children}
      </Box>
    </FormControlContext.Provider>
  );
};

const StyledFormControl = styled(NBFormControl)<IFormControlProps>(space);

const FormControl = ({ children, ...props }: IFormControlProps) => {
  return <StyledFormControl {...props}>{children}</StyledFormControl>;
};

export default FormControl;
