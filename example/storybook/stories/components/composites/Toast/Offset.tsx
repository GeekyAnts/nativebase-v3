import React from 'react';
import { ToastProvider, Button, useToast } from '@native-base/v3';

export default function () {
  const toast = useToast();

  return (
    <>
      <Button
        onPress={() => {
          toast({
            position: 'center',
            duration: 1000,
            title: 'Toast Center',
            offset: { x: 100, y: 100 },
          });
        }}
      >
        Buttom
      </Button>
      <ToastProvider />
    </>
  );
}
