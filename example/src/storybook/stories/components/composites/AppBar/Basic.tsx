import React from 'react';
import { AppBar, IconButton, Text, Icon } from '@native-base/v3';
import { text } from '@storybook/addon-knobs';

export default function () {
  return (
    <AppBar
      leading={<IconButton icon={<Icon name="menu" type="MaterialIcons" />} />}
      title={<Text>{text('title', 'Header')}</Text>}
      actions={[
        <IconButton
          key="chat"
          icon={<Icon name="chat" type="MaterialIcons" />}
        />,
        <IconButton
          key="favourite"
          icon={<Icon name="favorite" type="MaterialIcons" />}
        />,
        <IconButton
          key="loop"
          icon={<Icon name="loop" type="MaterialIcons" />}
        />,
      ]}
      bg="blue.4"
    />
  );
}
