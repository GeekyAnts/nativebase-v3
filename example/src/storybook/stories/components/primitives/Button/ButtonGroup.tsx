import React from 'react';
import { Button, ButtonGroup, VStack } from 'native-base';

export default function () {
  return (
    <VStack space={2}>
      {['solid', 'outline', 'ghost', 'link'].map((variant: any) => (
        <ButtonGroup variant={variant} spacing={100}>
          <Button ariaLabel="button1 of ButtonGroup">Button 1</Button>
          <Button ariaLabel="button2 of ButtonGroup">Button 2</Button>
          <Button ariaLabel="button3 of ButtonGroup">Button 3</Button>
        </ButtonGroup>
      ))}
    </VStack>
  );
}
