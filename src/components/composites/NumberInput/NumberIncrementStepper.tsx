import React from 'react';
import { Box, Icon, usePropsConfig } from '@native-base/v3';
import type { INumberInputFieldProps } from './props';
import { NumberInputContext, INumberInputContext } from './index';
import { TouchableOpacity } from 'react-native';

const NumberIncrementStepper = ({
  children,
  isDisabled: pIsDisabled,
  ariaLabel,
  ...props
}: INumberInputFieldProps) => {
  const { style, _active, _disabled, ...newProps } = usePropsConfig(
    'NumberInputStepper',
    props
  );
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
      disabled={numberInputValue + step > max || isDisabled}
      onPress={() => pressHandler()}
      accessible
      accessibilityLabel={ariaLabel}
    >
      <Box
        {...newProps}
        {..._active}
        {...(numberInputValue + step > max || isDisabled ? _disabled : {})}
        style={style}
      >
        {children || <Icon name="arrow-drop-up" type="MaterialIcons" />}
      </Box>
    </TouchableOpacity>
  );
};

export default NumberIncrementStepper;
