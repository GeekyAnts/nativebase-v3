import React from 'react';
import { Toast, Button, VStack, useToast, Box } from 'native-base';

export default function () {
  const toast = useToast();

  return (
    <>
      <VStack space={2}>
        <Button
          onClick={() => {
            toast({
              render: () => (
                <Box p={2} backgroundColor="cyan">
                  Hello World
                </Box>
              ),
            });
          }}
        >
          Custom
        </Button>
      </VStack>
      <Toast />
    </>
  );
}
