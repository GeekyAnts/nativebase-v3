import React from 'react';
import { Button, useOverlay, VStack } from '@native-base/v3';

export default function () {
  const { closeOverlay, setOverlayComponent } = useOverlay();

  return (
    <VStack space={3}>
      <Button
        onPress={() =>
          setOverlayComponent(
            <Button onPress={closeOverlay}>Press to close Overlay</Button>
          )
        }
      >
        Show Overlay
      </Button>
    </VStack>
  );
}
