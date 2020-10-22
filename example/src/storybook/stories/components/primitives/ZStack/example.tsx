import React from 'react';
import { ZStack, Box } from 'native-base';

export default function () {
  return (
    <ZStack>
      <Box p={8} bg="black"></Box>
      <Box p={5} bg="red.2"></Box>
    </ZStack>
  );
}
