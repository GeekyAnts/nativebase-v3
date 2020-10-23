import React from 'react';
import { Button, HStack } from 'native-base';

export default function () {
  return (
    <HStack space={2}>
      <Button size="xs">Button</Button>
      <Button size="sm">Button</Button>
      <Button size="md">Button</Button>
      <Button size="lg">Button</Button>
    </HStack>
  );
}
