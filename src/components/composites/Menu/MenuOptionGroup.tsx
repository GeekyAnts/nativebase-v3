import React from 'react';
import { MenuGroup } from './MenuGroup';
import type { IMenuOptionGroupProps, IMenuOptionContextProps } from './props';

export const MenuOptionContext = React.createContext<IMenuOptionContextProps>({
  values: [],
  onChange: (_val) => {},
  type: 'checkbox',
});

export const MenuOptionGroup = ({
  type,
  defaultValue,
  value,
  onChange,
  ...props
}: IMenuOptionGroupProps) => {
  let internalDefaultValue = defaultValue
    ? Array.isArray(defaultValue)
      ? defaultValue
      : [defaultValue]
    : [];

  let [internalValues, setValues] = React.useState<Array<string | number>>(
    internalDefaultValue
  );
  onChange = (value: string | number) => {
    if (type === 'checkbox') {
      let newValues = [...internalValues];
      if (internalValues.includes(value)) {
        newValues.splice(newValues.indexOf(value), 1);
        setValues(newValues);
      } else {
        newValues.push(value);
        setValues(newValues);
      }
    } else if (type === 'radio') {
      setValues([value]);
    }
  };
  return (
    <MenuOptionContext.Provider
      value={{
        values: !value
          ? internalValues
          : Array.isArray(value)
          ? value
          : [value],
        onChange,
        type,
      }}
    >
      <MenuGroup {...props} />
    </MenuOptionContext.Provider>
  );
};
