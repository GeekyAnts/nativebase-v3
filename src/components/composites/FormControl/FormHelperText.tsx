import React from 'react';
import styled from 'styled-components/native';
import { space } from 'styled-system';
import { Box, ThemeContext } from 'native-base';
import { FormControlContext } from './FormControl';
import type { IFormHelperTextProps, IFormControlContext } from './props';

const NBFormHelperText = ({
  children,
  style,
  _disabled,
  _focus,
  _invalid,
  ...props
}: IFormHelperTextProps) => {
  const { isInvalid, isDisabled }: IFormControlContext = React.useContext(
    FormControlContext
  );

  const theme = React.useContext(ThemeContext);
  return (
    <Box
      {...props}
      fontSize="xs"
      color={theme.colors.muted[2]}
      style={[style, isInvalid && _invalid, isDisabled && _disabled]}
    >
      {children}
    </Box>
  );
};

const StyledFormHelperText = styled(NBFormHelperText)<IFormHelperTextProps>(
  space
);
const FormHelperText = ({ children, ...props }: IFormHelperTextProps) => {
  return <StyledFormHelperText {...props}>{children}</StyledFormHelperText>;
};

export default FormHelperText;
