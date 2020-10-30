import React from 'react';
import { Flex, Icon } from 'native-base';
import { IMenuItemProps, MenuItem } from './MenuItem';
import type { IMenuOptionContextProps } from './props';
import { MenuOptionContext } from './MenuOptionGroup';
export type IMenuItemOptionProps = IMenuItemProps & {
  value: string | number;
};

export const MenuItemOption = ({
  value,
  children,
  onPress,
  ...props
}: IMenuItemOptionProps) => {
  const { values, onChange, type }: IMenuOptionContextProps = React.useContext(
    MenuOptionContext
  );
  const modifiedOnPress = (e: any) => {
    onChange(value);
    onPress && onPress(e);
  };
  let iconName =
    type === 'checkbox'
      ? values.includes(value)
        ? 'check-box'
        : 'check-box-outline-blank'
      : values.includes(value)
      ? 'radio-button-checked'
      : 'radio-button-unchecked';
  return (
    <MenuItem {...props} onPress={modifiedOnPress}>
      <Flex direction="row" fontSize={14} p={2}>
        <Icon name={iconName} pr={2} />
        {children}
      </Flex>
    </MenuItem>
  );
};
