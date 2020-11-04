import React from 'react';
import { AppBar, IconButton, Text } from 'native-base';
import { select, text } from '@storybook/addon-knobs';

export default function () {
  return (
    <AppBar
      leading={
        <IconButton
          name={select(
            'icon',
            {
              menu: 'menu',
              account: 'account-circle',
              back: 'arrow-back',
              home: 'home',
            },
            'menu'
          )}
          type="MaterialIcons"
        />
      }
      title={<Text>{text('title', 'Header')}</Text>}
      actions={[
        <IconButton key="chat" name="chat" type="MaterialIcons" />,
        <IconButton key="favourite" name="favorite" type="MaterialIcons" />,
        <IconButton key="loop" name="loop" type="MaterialIcons" />,
      ]}
      bg="blue.4"
    />
  );
}
