import React from 'react';
import { ToastProvider, Button, useOverlay, VStack } from '@native-base/v3';

export default function () {
  const [disableOverlay, setDisableOverlay] = React.useState(false);
  const { closeOverlay, setOverlay } = useOverlay();

  return (
    <VStack space={3}>
      <Button
        onPress={() =>
          setOverlay(
            <Button onPress={closeOverlay}>Press to close Overlay</Button>,
            { disableOverlay, position: 'top', backgroundColor: '#5511ff44' }
          )
        }
      >
        Show Overlay
      </Button>
      <Button
        onPress={() => {
          setDisableOverlay(!disableOverlay);
        }}
      >
        {disableOverlay ? 'Enable ' : 'Disable '}Overlay
      </Button>
      <Button onPress={closeOverlay}>Hide Overlay</Button>
      <ToastProvider />
    </VStack>
  );
}
