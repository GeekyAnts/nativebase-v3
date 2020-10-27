import React from 'react';
import styled from 'styled-components/native';
import { space } from 'styled-system';
import { Box, Icon } from 'native-base';
import type { INumberInputFieldProps } from './props';
import { NumberInputContext, INumberInputContext } from './index';
import { TouchableOpacity } from 'react-native';

const NBNumberIncrementStepper = ({
  children,
  isDisabled,
  ariaLabel,
  ...props
}: INumberInputFieldProps) => {
  const {
    value,
    handleChange,
    step,
    ...context
  }: INumberInputContext = React.useContext(NumberInputContext);
  const pressHandler = () => {
    handleChange && handleChange(value + step);
  };
  return (
    <TouchableOpacity
      activeOpacity={1}
      disabled={isDisabled || context.isDisabled}
      onPress={() => pressHandler()}
      accessible={true}
      accessibilityLabel={ariaLabel}
    >
      <Box borderBottomWidth={1} {...props}>
        {children || <Icon name="arrow-drop-up" type="MaterialIcons" />}
      </Box>
    </TouchableOpacity>
  );
};

const StyledNumberIncrementStepper = styled(NBNumberIncrementStepper)<
  INumberInputFieldProps
>(space);
const NumberIncrementStepper = ({
  children,
  ...props
}: INumberInputFieldProps) => {
  return (
    <StyledNumberIncrementStepper {...props}>
      {children}
    </StyledNumberIncrementStepper>
  );
};

export default NumberIncrementStepper;
