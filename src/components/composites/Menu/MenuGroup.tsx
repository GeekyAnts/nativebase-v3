import React from 'react';
import { Text, usePropsConfig } from '../../..';
import { TouchableItem } from './TouchableItem';
import type { IMenuGroupProps } from './props';

export const MenuGroup = ({ title, children }: IMenuGroupProps) => {
  const newProps = usePropsConfig('MenuGroup', {});
  return (
    <>
      <TouchableItem activeOpacity={1} underlayColor={'transparent'}>
        <Text {...newProps}>{title}</Text>
      </TouchableItem>
      {children}
    </>
  );
};
