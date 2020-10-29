import React from 'react';
import styled from 'styled-components/native';
import { space } from 'styled-system';
import { Box, Text, ThemeContext } from 'native-base';
import { FormControlContext } from './FormControl';
import type { IFormLabelProps, IFormControlContext } from './props';

const NBFormLabel = ({
  children,
  style,
  _disabled,
  _focus,
  _invalid,
  ...props
}: IFormLabelProps) => {
  const {
    isInvalid,
    isRequired,
    isDisabled,
  }: IFormControlContext = React.useContext(FormControlContext);
  const theme = React.useContext(ThemeContext);
  const requiredAsterisk = () => <Text color={theme.colors.red[3]}>*</Text>;

  return (
    <Box
      flexDirection="row"
      justifyContent="flex-start"
      {...props}
      fontSize="md"
      style={[style, isInvalid && _invalid, isDisabled && _disabled]}
    >
      {children}
      {isRequired && requiredAsterisk()}
    </Box>
  );
};

const StyledFormLabel = styled(NBFormLabel)<IFormLabelProps>(space);
const FormLabel = ({ children, ...props }: IFormLabelProps) => {
  return <StyledFormLabel {...props}>{children}</StyledFormLabel>;
};

export default FormLabel;
