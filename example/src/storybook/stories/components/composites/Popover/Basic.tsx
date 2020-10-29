import React from 'react';
import {
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Text,
  Button,
  Box,
  Flex,
} from 'native-base';
import Tooltip from 'rn-tooltip';

export default function () {
  return (
    <Popover>
      <PopoverTrigger>
        <Button isDisabled width="100">
          Trigger
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverCloseButton />
        <PopoverHeader>Header</PopoverHeader>
        <PopoverBody>
          <Button>Button</Button>
        </PopoverBody>
        <PopoverFooter>This is the footer</PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}
