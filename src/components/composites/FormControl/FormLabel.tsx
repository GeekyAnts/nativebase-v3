import React from 'react';
import { Box, Text } from '../../primitives';
import { useToken } from '../../../theme';
import { FormControlContext } from './FormControl';
import type { IFormLabelProps, IFormControlContext } from './props';

const FormLabel = ({
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
  const textColor = useToken('colors', 'red.3');
  const requiredAsterisk = () => <Text color={textColor}>*</Text>;

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
export default FormLabel;
