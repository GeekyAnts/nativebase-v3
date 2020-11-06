import React from 'react';
import { Box } from 'native-base';
import {
  FormControlContext,
  IFormControlContext,
} from '../../composites/FormControl';
import type { IRadioGroupProps } from './props';

export const RadioContext = React.createContext({});

const RadioGroup = ({
  size,
  children,
  onChange,
  colorScheme,
  value,
  defaultValue,
  ...props
}: IRadioGroupProps) => {
  const formControlContext: IFormControlContext = React.useContext(
    FormControlContext
  );
  const [selected, setSelected] = React.useState(value || defaultValue || []);
  const onChangeHandler = (radioValue: string | number) => {
    console.log('radioValue - ', radioValue);

    setSelected(radioValue);
    onChange && onChange(radioValue);
  };

  return (
    <RadioContext.Provider
      value={{
        ...formControlContext,
        onChangeHandler,
        size,
        colorScheme,
        value: selected,
      }}
    >
      <Box alignItems="flex-start" {...props}>
        {children}
      </Box>
    </RadioContext.Provider>
  );
};

export default RadioGroup;
