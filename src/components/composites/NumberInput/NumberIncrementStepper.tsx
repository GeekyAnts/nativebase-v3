import React from 'react';
import {
  NumberInputContext,
  INumberInputContext,
  INumberInputStepperProps,
  NBStepper,
} from './index';

const NumberIncrementStepper = ({
  children,
  isDisabled: pIsDisabled,
  ...props
}: INumberInputStepperProps) => {
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
    <NBStepper
      isIncrement
      isDisabled={isDisabled}
      pressHandler={pressHandler}
      disablitityCheck={numberInputValue + step > max}
      {...props}
    >
      {children}
    </NBStepper>
  );
};
export default NumberIncrementStepper;
