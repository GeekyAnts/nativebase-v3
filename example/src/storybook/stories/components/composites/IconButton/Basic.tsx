import React from 'react';
import { IconButton } from 'native-base';
import { text } from '@storybook/addon-knobs';
export default function () {
  return (
    <IconButton
      type="MaterialIcons"
      name={text('name', 'menu')}
      bg={text('bg', 'blue.2')}
      iconProps={{ size: 6 }}
    />
  );
}
