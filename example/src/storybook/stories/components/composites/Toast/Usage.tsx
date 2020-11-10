import React from 'react';
import { ToastProvider, Button, useToast } from 'native-base';

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
            duration: 'long',
            title: 'Toast Center',
          });
        }}
      >
        Buttom
      </Button>
      <Button
        onPress={() => {
          toast({
            duration: 'short',
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
