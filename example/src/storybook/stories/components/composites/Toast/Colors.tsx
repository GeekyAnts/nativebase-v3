import React from 'react';
import { Toast, Button, VStack, useToast } from 'native-base';

export default function () {
  const toast = useToast();

  return (
    <>
      <VStack space={2}>
        <Button
          onPress={() => {
            toast({
              title: 'Small',
              description: 'description : include a lot of words',
              status: 'danger',
            });
          }}
        >
          Small
        </Button>
        <Button
          onPress={() => {
            toast({
              title: 'Medium',
              description: 'description : include a lot of words',
              status: 'red',
            });
          }}
        >
          Medium
        </Button>
        <Button
          onPress={() => {
            toast({
              title: 'Large',
              description: 'description : include a lot of words',
            });
          }}
        >
          Large
        </Button>
        <Button
          onPress={() => {
            toast({
              title: 'Full',
              description: 'description : include a lot of words',
              status: 'dark',
            });
          }}
        >
          Full
        </Button>
      </VStack>
      <Toast />
    </>
  );
}
