import React from 'react';
import { Snackbar, Button, Box, Overlay, useOverlay } from '@native-base/v3';
export default function () {
  const { addComponentOnOverlay } = useOverlay();
  const setSnackbar = () => {
    const template = (
      <Box m={2} p={8} color="white" bg="green.300" rounded="md">
        Snackbar
      </Box>
    );
    addComponentOnOverlay(template, 'top-left');
  };
  return (
    <>
      <Button onPress={setSnackbar}>Click Me</Button>
      <Overlay />
    </>
  );
}
