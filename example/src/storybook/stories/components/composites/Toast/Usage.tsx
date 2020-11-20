import React from 'react';
import { ToastProvider, Button, useToast } from '@native-base/v3';

export default function () {
  const toast = useToast();

  return (
    <>
      <Button
        onPress={() => {
          toast({
            position: 'top',
            title: 'Toast Top',
          });
        }}
      >
        Buttom
      </Button>
      <Button
        onPress={() => {
          toast({
            position: 'center',
            title: 'Toast Center',
          });
        }}
      >
        Buttom
      </Button>
      <Button
        onPress={() => {
          toast({
            title: 'Toast Bottom Hey heyere ',
          });
        }}
      >
        Buttom
      </Button>
      <ToastProvider />
    </>
  );
}
