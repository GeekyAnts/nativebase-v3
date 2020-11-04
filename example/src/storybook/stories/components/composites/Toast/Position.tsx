import React from 'react';
import { Toast, Button, Box, VStack, useToast } from 'native-base';

export default function () {
  const toast = useToast();

  return (
    <>
      <VStack space={2}>
        <Box justifyContent="space-between" flexDirection="row">
          <Button
            onPress={() => {
              toast({
                title: 'Top Left ',
                description: 'description : include a lot of words',
                status: 'danger',
                position: 'top-left',
              });
            }}
          >
            Top Left
          </Button>
          <Button
            onPress={() => {
              toast({
                position: 'top',
                title: 'Top',
                description: 'description : include a lot of words',
                status: 'muted',
              });
            }}
          >
            Top
          </Button>
          <Button
            onPress={() => {
              toast({
                position: 'top-right',
                title: 'Top Right',
                description: 'description : include a lot of words',
              });
            }}
          >
            Top Right
          </Button>
        </Box>
        <Box justifyContent="space-between" flexDirection="row">
          <Button
            onPress={() => {
              toast({
                title: 'Bottom Left ',
                description: 'description : include a lot of words',
                status: 'dark',
                position: 'bottom-left',
              });
            }}
          >
            Bottom Left
          </Button>
          <Button
            mx={2}
            onPress={() => {
              toast({
                title: 'Bottom',
                description: 'description : include a lot of words',
                status: 'warning',
              });
            }}
          >
            Bottom
          </Button>
          <Button
            onPress={() => {
              toast({
                position: 'bottom-right',
                title: 'Bottom Right',
                description: 'description : include a lot of words',
                status: 'teal',
              });
            }}
          >
            Bottom Right
          </Button>
        </Box>
      </VStack>
      <Toast />
    </>
  );
}
