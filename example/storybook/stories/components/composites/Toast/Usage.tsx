import React from 'react';
import { Button, useToast } from '@native-base/v3';

export default function () {
  const { setToast } = useToast();

  return (
    <>
      <Button
        onPress={() => {
          setToast({
            position: 'top',
            title: 'Toast Top',
          });
        }}
      >
        Buttom
      </Button>
      <Button
        onPress={() => {
          setToast({
            position: 'center',
            title: 'Toast Center',
          });
        }}
      >
        Buttom
      </Button>
      <Button
        onPress={() => {
          setToast({
            title: 'Toast Bottom Hey heyere ',
          });
        }}
      >
        Buttom
      </Button>
    </>
  );
}
