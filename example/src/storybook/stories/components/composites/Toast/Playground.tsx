import React from 'react';
import { Toast, Button, useToast } from 'native-base';

export default function () {
  const toast = useToast();

  return (
    <>
      <Button
        onPress={() => {
          toast({
            title: 'Toast ',
            description: 'description : include a lot of words',
          });
        }}
      >
        Buttom
      </Button>
      <Toast />
    </>
  );
}
