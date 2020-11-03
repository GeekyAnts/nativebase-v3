import React from 'react';
import { Button, ButtonGroup, VStack } from 'native-base';

export default function () {
  return (
    <VStack>
      {['solid', 'outline', 'ghost', 'link'].map((variant: any) => (
        <ButtonGroup variant={variant} spacing={10}>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
        </ButtonGroup>
      ))}
    </VStack>
  );
}
