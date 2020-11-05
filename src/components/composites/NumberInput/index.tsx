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
  defaultValue = '0',
  keepWithinRange = true,
  value = '0',
  min = 0,
  max = 100,
  ...props
}: INumberInputProps) => {
  // TODO: Needs refactoring after input is refactored.
  const [numberInputValue, setNumberInputValue] = React.useState(
    parseInt(value || defaultValue, 10)
  );
  const handleChange = (newValue: number) => {
    const temp = newValue;
    setNumberInputValue(temp);
    if (keepWithinRange) {
      if (newValue < min) setNumberInputValue(min);
      else if (newValue > max) setNumberInputValue(max);
    }
  };
  const handleChangeWithoutCheck = (newValue: number) => {
    const temp = newValue;
    setNumberInputValue(temp);
  };
  let numberInputStepper: JSX.Element | null = null;

  const separatingNumberInputStepper = (allChildren: any) => {
    return React.Children.map(allChildren, (child: JSX.Element) => {
      if (child.type.name === 'NumberInputStepper') {
        numberInputStepper = child;
        return null;
      } else {
        return React.cloneElement(child, {}, child.props.children);
      }
    });
  };
  const updatedChildren = separatingNumberInputStepper(children);

  return (
    <NumberInputContext.Provider
      value={{
        ...props,
        min,
        max,
        handleChange,
        handleChangeWithoutCheck,
        numberInputValue,
        numberInputStepper,
      }}
    >
      {updatedChildren}
    </NumberInputContext.Provider>
  );
};

const StyledNumberInput = styled(NBNumberInput)<INumberInputProps>(space);
StyledNumberInput.defaultProps = {
  size: 'sm',
  step: 1,
  min: -Infinity,
  max: Infinity,
  defaultValue: '0',
  keepWithinRange: true,
  clampValueOnBlur: true,
  focusInputOnChange: true,
  getAriaValueText: true,
};

const NumberInput = ({ children, ...props }: INumberInputProps) => {
  return <StyledNumberInput {...props}>{children}</StyledNumberInput>;
};

export default NumberInput;
