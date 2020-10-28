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
    min = -Infinity,
    handleChange,
    ...context
  }: INumberInputContext = React.useContext(NumberInputContext);
  const isDisabled = pIsDisabled || context.isDisabled;
  const pressHandler = () => {
    handleChange && handleChange(numberInputValue - step);
  };
  return (
    <TouchableOpacity
      activeOpacity={1}
      disabled={numberInputValue - step < min || isDisabled}
      onPress={() => pressHandler()}
      accessible={true}
      accessibilityLabel={ariaLabel}
    >
      <Box
        {...props}
        style={[
          (numberInputValue - step < min || isDisabled) && {
            backgroundColor: 'lightgray',
          },
        ]}
      >
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
