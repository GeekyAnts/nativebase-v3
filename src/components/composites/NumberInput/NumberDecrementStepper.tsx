import React from 'react';
import styled from 'styled-components/native';
import { space } from 'styled-system';
import { Box, Icon } from 'native-base';
import type { INumberInputFieldProps } from './props';
import { NumberInputContext, INumberInputContext } from './index';
import { TouchableOpacity } from 'react-native';

const NBNumberDecrementStepper = ({
  children,
  isDisabled: pIsDisabled,
  ariaLabel,
  ...props
}: INumberInputFieldProps) => {
  const {
    numberInputValue = 0,
    step = 1,
    handleChange,
    ...context
  }: INumberInputContext = React.useContext(NumberInputContext);

  // let value: number = numberValue || 0;
  let isDisabled = pIsDisabled || context.isDisabled;
  const pressHandler = () => {
    // isDisabled = value - step < min;
    handleChange && handleChange(numberInputValue - step);
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      disabled={isDisabled}
      onPress={() => pressHandler()}
      accessible={true}
      accessibilityLabel={ariaLabel}
    >
      <Box {...props}>
        {children || <Icon name="arrow-drop-down" type="MaterialIcons" />}
      </Box>
    </TouchableOpacity>
  );
};

const StyledNumberDecrementStepper = styled(NBNumberDecrementStepper)<
  INumberInputFieldProps
>(space);
const NumberDecrementStepper = ({
  children,
  ...props
}: INumberInputFieldProps) => {
  return (
    <StyledNumberDecrementStepper {...props}>
      {children}
    </StyledNumberDecrementStepper>
  );
};

export default NumberDecrementStepper;
