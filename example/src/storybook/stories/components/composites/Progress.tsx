import React from 'react';
import { Box, Progress } from 'native-base';

export default function () {
  return (
    <Box>
      <Progress bg="pink.1" size="md" mb={2} colorScheme="green" value={45} />
      <Progress rounded="50" size="lg" colorScheme="red" mb={2} value={65} />
      <Progress size="xl" colorScheme="warning" value={85} />
    </Box>
  );
}
