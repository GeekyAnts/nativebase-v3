import React from 'react';
import { Box, Icon } from '../../primitives';
import { usePropsConfig } from '../../../theme';
import type { INumberInputStepperProps } from './props';
import { NumberInputContext, INumberInputContext } from './index';
import { TouchableOpacity } from 'react-native';

const NumberDecrementStepper = ({
  children,
  isDisabled: pIsDisabled,
  ariaLabel,
  ...props
}: INumberInputStepperProps) => {
  // TODO: Needs refactoring after input is refactored.
  const { style, _active, _disabled, ...newProps } = usePropsConfig(
    'NumberInputStepper',
    props
  );
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
      onPress={pressHandler}
      accessible
      accessibilityLabel={ariaLabel}
    >
      <Box
        {...newProps}
        {..._active}
        {...(numberInputValue - step < min || isDisabled ? _disabled : {})}
        style={style}
      >
        {children || <Icon name="arrow-drop-down" type="MaterialIcons" />}
      </Box>
    </TouchableOpacity>
  );
};

export default NumberDecrementStepper;
