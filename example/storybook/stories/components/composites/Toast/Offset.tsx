import React from 'react';
import { Button, useToast } from '@native-base/v3';

export default function () {
  const { setToast } = useToast();

  return (
    <>
      <Button
        onPress={() => {
          setToast({
            position: 'center',
            duration: 1000,
            title: 'Toast Center',
            offset: { x: 100, y: 100 },
          });
        }}
      >
        Buttom
      </Button>
    </>
  );
}
