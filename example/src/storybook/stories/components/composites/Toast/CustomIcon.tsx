import React from 'react';
import { Toast, Button, useToast, Icon } from 'native-base';

export default function () {
  const toast = useToast();

  return (
    <>
      <Button
        onPress={() => {
          toast({
            title: 'Toast ',
            status: 'success',
            icon: <Icon name="checkcircle" type="AntDesign" size={6} />,
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
