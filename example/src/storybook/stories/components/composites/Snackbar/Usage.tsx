import React from 'react';
import { Snackbar, Text, Box } from '@native-base/v3';
export default function () {
  return (
    <>
      <Text>Snackbar will stay for 10 secs, default is 5 sec.</Text>
      <Snackbar duration={10000}>
        <Box p="40px" color="white" mt="4" bg="teal.500" rounded="md">
          Snackbar
        </Box>
      </Snackbar>
    </>
  );
}
