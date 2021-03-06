import React from 'react';
import {
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Button,
} from '@native-base/v3';

export default function () {
  return (
    <Popover>
      <PopoverTrigger>
        <Button>Trigger</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverCloseButton />
        <PopoverHeader>Confirmation!</PopoverHeader>
        <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
