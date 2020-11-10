import React from 'react';
import { Box, ThemeContext } from '@native-base/v3';
import { FormControlContext } from './FormControl';
import type { IFormHelperTextProps, IFormControlContext } from './props';

const FormHelperText = ({
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

export default FormHelperText;
