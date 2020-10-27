import React from 'react';
import styled from 'styled-components/native';
import { space } from 'styled-system';
export { default as NumberInputField } from './NumberInputField';
export { default as NumberInputStepper } from './NumberInputStepper';
export { default as NumberIncrementStepper } from './NumberIncrementStepper';
export { default as NumberDecrementStepper } from './NumberDecrementStepper';
import type {
  INumberInputProps,
  INumberInputFieldProps,
  INumberInputContext,
} from './props';
export type { INumberInputProps, INumberInputFieldProps, INumberInputContext };

export const NumberInputContext = React.createContext({});
const NBNumberInput = ({
  children,
  defaultValue,
  keepWithinRange,
  value,
  min,
  max,
  ...props
}: INumberInputProps) => {
  // TODO: Needs refactoring after input is refactored.
  const [numberInputValue, setNumberInputValue] = React.useState(
    value || defaultValue || min
  );
  const handleChange = (newValue: number) => {
    console.log('updating with - ', newValue);
    if (keepWithinRange && newValue >= min && newValue <= max)
      setNumberInputValue(newValue);
  };
  let numberInputStepper: JSX.Element | null = null;

  const sepratingNumberInputStepper = (children: any) => {
    return React.Children.map(children, (child: JSX.Element) => {
      if (child.type.name === 'NumberInputStepper') {
        numberInputStepper = child;
        return null;
      } else {
        return React.cloneElement(child, {}, child.props.children);
      }
    });
  };
  const updatedChildren = sepratingNumberInputStepper(children);

  return (
    <NumberInputContext.Provider
      value={{
        handleChange,
        min,
        max,
        ...props,
        value: numberInputValue,
        numberInputStepper,
      }}
    >
      {updatedChildren}
    </NumberInputContext.Provider>
  );
};

const StyledNumberInput = styled(NBNumberInput)<INumberInputProps>(space);
StyledNumberInput.defaultProps = {
  inputSize: 'sm',
  step: 1,
  min: 0,
  max: 100,
  keepWithinRange: true,
  clampValueOnBlur: true,
  focusInputOnChange: true,
  getAriaValueText: true,
};

const NumberInput = ({ children, ...props }: INumberInputProps) => {
  return <StyledNumberInput {...props}>{children}</StyledNumberInput>;
};

export default NumberInput;
