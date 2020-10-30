import React from 'react';
import {
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Button,
} from 'native-base';

export default function () {
  return (
    <Popover>
      <PopoverTrigger>
        <Button isDisabled>Trigger</Button>
      </PopoverTrigger>
      <PopoverContent width={250}>
        <PopoverCloseButton />
        <PopoverHeader>Confirmation!</PopoverHeader>
        <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
      </PopoverContent>
    </Popover>
  );
}