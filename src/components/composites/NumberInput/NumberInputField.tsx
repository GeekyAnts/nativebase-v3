import React from 'react';
import styled from 'styled-components/native';
import { space } from 'styled-system';
import { Input } from 'native-base';
import type { INumberInputFieldProps } from './props';
import { NumberInputContext, INumberInputContext } from './index';

const NBNumberInputFiled = ({
  isDisabled,
  ...props
}: INumberInputFieldProps) => {
  const {
    handleChange,
    numberInputStepper,
    numberInputValue,
    ...context
  }: INumberInputContext & {
    handleChange?: (value: string | number) => void;
    numberInputStepper?: any;
  } = React.useContext(NumberInputContext);
  const changeHandler = (inputValue: any) => {
    const value = parseInt(inputValue);
    if (value) {
      handleChange && handleChange(value);
    } else {
      handleChange && handleChange('');
    }
  };
  return (
    <Input
      p={0}
      pl={2}
      width="70%"
      {...context}
      {...props}
      isDisabled={isDisabled || context.isDisabled}
      onChangeText={(inputValue) => changeHandler(inputValue)}
      keyboardType="numeric"
      value={`${numberInputValue}`}
      style={[context.style, props.style]}
      InputRightElement={numberInputStepper}
    />
  );
};

const StyledNumberInputFiled = styled(NBNumberInputFiled)<
  INumberInputFieldProps
>(space);
const NumberInputFiled = ({ children, ...props }: INumberInputFieldProps) => {
  return <StyledNumberInputFiled {...props}>{children}</StyledNumberInputFiled>;
};

export default NumberInputFiled;
