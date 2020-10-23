import React from 'react';
import { Button, HStack } from 'native-base';

export default function () {
  return (
    <HStack space={2}>
      <Button variant="solid">Button</Button>
      <Button variant="ghost">Button</Button>
      <Button variant="link">Button</Button>
      <Button variant="outline">Button</Button>
    </HStack>
  );
}
