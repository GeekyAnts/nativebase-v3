import React from 'react';
import styled from 'styled-components/native';
import { space } from 'styled-system';
import { Input } from 'native-base';
import type { IPinInputFieldProps } from './props';
import { PinInputContext, IPinInputProps } from './index';

const NBPinInputFiled = ({
  // TODO: remove pSize and cSize once Input will support size instead of inputSize
  value: pValue,
  defaultValue: pDefaultValue,
  ...props
}: IPinInputFieldProps) => {
  const fieldIndex = props.fieldIndex || 0;
  let {
    handleChange,
    value: cValue,
    defaultValue: cDefaultValue,
    ...context
  }: IPinInputProps & {
    handleChange?: (value: string, index: number) => void;
    value?: string[] | string;
    size?: string;
    defaultValue?: string[] | string;
  } = React.useContext(PinInputContext);
  cDefaultValue = cDefaultValue && cDefaultValue[fieldIndex];
  cValue = cValue && cValue[fieldIndex];

  const [pinInputField, setPinInputField] = React.useState(pValue || cValue);
  const changeHandler = (value: any) => {
    setPinInputField(value);
    handleChange && handleChange(value, fieldIndex);
  };

  return (
    <Input
      p={2}
      {...context}
      {...props}
      maxLength={1}
      onChangeText={(value) => changeHandler(value)}
      keyboardType="numeric"
      defaultValue={pDefaultValue || cDefaultValue}
      value={pinInputField}
      style={[context.style, props.style]}
    />
  );
};

const StyledPinInputFiled = styled(NBPinInputFiled)<IPinInputFieldProps>(space);
const PinInputFiled = ({ children, ...props }: IPinInputFieldProps) => {
  return <StyledPinInputFiled {...props}>{children}</StyledPinInputFiled>;
};

export default PinInputFiled;
