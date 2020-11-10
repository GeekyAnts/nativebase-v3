import React from 'react';
import { Box } from '../../..';
import {
  FormControlContext,
  IFormControlContext,
} from '../../composites/FormControl';
import type { ICheckboxGroupProps } from './props';

export const CheckboxContext = React.createContext({});

const CheckboxGroup = ({
  size,
  children,
  onChange,
  colorScheme,
  value,
  defaultValue,
  ...props
}: ICheckboxGroupProps) => {
  const formControlContext: IFormControlContext = React.useContext(
    FormControlContext
  );
  const [values, setValues] = React.useState(value || defaultValue || []);
  const groupValueChangeHandler = (
    checkboxValue: string | number,
    isChecked: boolean
  ) => {
    const valuesSet = new Set(values);
    if (isChecked) valuesSet.add(checkboxValue);
    else valuesSet.delete(checkboxValue);
    setValues([...valuesSet]);
    onChange && onChange([...valuesSet]);
  };
  return (
    <CheckboxContext.Provider
      value={{
        ...formControlContext,
        groupValueChangeHandler,
        size,
        colorScheme,
        value: values,
      }}
    >
      <Box alignItems="flex-start" {...props}>
        {children}
      </Box>
    </CheckboxContext.Provider>
  );
};

export default CheckboxGroup;
