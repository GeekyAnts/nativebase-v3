import React from 'react';
import styled from 'styled-components/native';
import { space } from 'styled-system';
import { Box, Icon } from 'native-base';
import type { INumberInputFieldProps } from './props';
import { NumberInputContext, INumberInputContext } from './index';
import { TouchableOpacity } from 'react-native';

const NBNumberIncrementStepper = ({
  children,
  isDisabled: pIsDisabled,
  ariaLabel,
  ...props
}: INumberInputFieldProps) => {
  const {
    numberInputValue = 0,
    step = 1,
    max = +Infinity,
    handleChange,
    ...context
  }: INumberInputContext = React.useContext(NumberInputContext);
  const isDisabled = pIsDisabled || context.isDisabled;
  const pressHandler = () => {
    handleChange && handleChange(numberInputValue + step);
  };
  return (
    <TouchableOpacity
      activeOpacity={1}
      disabled={numberInputValue + step >= max || isDisabled}
      onPress={() => pressHandler()}
      accessible={true}
      accessibilityLabel={ariaLabel}
    >
      <Box
        borderBottomWidth={1}
        {...props}
        style={[
          (numberInputValue + step >= max || isDisabled) && {
            backgroundColor: 'lightgray',
          },
        ]}
      >
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
