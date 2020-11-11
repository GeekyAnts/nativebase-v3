import React from 'react';
import { ZStack, Box } from '@native-base/v3';

export default function () {
  return (
    <ZStack alignItems="center">
      <Box p={16} bg="black" />
      <Box p={10} bg="red.2" />
    </ZStack>
  );
}
