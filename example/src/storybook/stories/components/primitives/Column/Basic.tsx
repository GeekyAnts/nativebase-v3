import React from 'react';
import { Column, Box } from 'native-base';

export default function () {
  return (
    <Column height={400}>
      <Box w="100" flexGrow={1} bg="green.5" />
      <Box bg="blue.3" flexGrow={2} w="100" />
      <Box flexGrow={1} w="100" bg="tomato" />
    </Column>
  );
}
