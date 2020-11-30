import React from 'react';
import { Button, HStack } from '@native-base/v3';

export default function () {
  return (
    <HStack space={2}>
      {['solid', 'outline', 'ghost', 'link', 'unstyled'].map((variant: any) => (
        <Button variant={variant} colorScheme="teal">
          Button
        </Button>
      ))}
    </HStack>
  );
}
