import React from 'react';
import { Box, Progress, Center, Heading } from 'native-base';

export default function () {
  return (
    <Box w="90%">
      <Center mb={8}>
        <Heading>Different colorSchemes</Heading>
      </Center>
      <Progress size="sm" colorScheme="success" mb={4} value={45} />
      <Progress size="lg" colorScheme="danger" mb={4} value={65} />
      <Progress size="xl" colorScheme="warning" mb={4} value={75} />
    </Box>
  );
}
