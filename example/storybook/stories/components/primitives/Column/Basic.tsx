import React from 'react';
import { Column, Box } from '@native-base/v3';

export default function () {
  return (
    <Column height={400}>
      <Box w="100" flexGrow={1} bg="green.500" />
      <Box bg="blue.300" flexGrow={2} w="100" />
      <Box flexGrow={1} w="100" bg="tomato" />
    </Column>
  );
}
