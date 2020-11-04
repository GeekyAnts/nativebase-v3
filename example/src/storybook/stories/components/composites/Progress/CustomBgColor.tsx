import React from 'react';
import { Box, Progress, Center, Heading } from 'native-base';

export default function () {
  return (
    <Box w="90%">
      <Center mb={8}>
        <Heading>Custom Track Color</Heading>
      </Center>
      <Progress size="lg" colorScheme="warning" bg="teal.2" mb={4} value={75} />
    </Box>
  );
}