import React from 'react';
import { Menu, MenuItem, Divider, IconButton } from 'native-base';

export default function () {
  return (
    <Menu
      trigger={(triggerProps: any) => {
        return (
          <IconButton name="menu" {...triggerProps} bg="teal.2">
            Show Menu
          </IconButton>
        );
      }}
    >
      <MenuItem disabled>Menu item 1</MenuItem>
      <MenuItem>Menu item 2</MenuItem>
      <MenuItem disabled>Menu item 3</MenuItem>
      <Divider />
      <MenuItem>Menu item 4</MenuItem>
    </Menu>
  );
}
