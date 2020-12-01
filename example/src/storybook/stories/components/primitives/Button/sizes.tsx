import React from 'react';
import { Button, HStack } from '@native-base/v3';

export default function () {
  return (
    <HStack space={2}>
      {['xs', 'sm', 'md', 'lg'].map((size: any) => (
        <Button key={size} size={size} colorScheme="teal">
          Button
        </Button>
      ))}
    </HStack>
  );
}
