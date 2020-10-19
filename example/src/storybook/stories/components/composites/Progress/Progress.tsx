import React from 'react';
import { Box, Progress, Center, Heading, Text } from 'native-base';

export default function () {
  return (
    <Box w="90%">
      <Center mb={8}>
        <Heading>This is all the variantions of Progress Bar</Heading>
        <Text>(You can edit the values using knobs)</Text>
      </Center>
      <Text>Try different colorScheme using knobs </Text>
      <Progress size="md" mb={4} colorScheme="green" value={45} />
      <Text>Try different sizes using knobs </Text>
      <Progress rounded="50" size="lg" colorScheme="red" mb={4} value={65} />
      <Text>You can pass custom background color using bg </Text>
      <Progress size="xl" colorScheme="warning" bg="teal.2" mb={4} value={75} />
      {/* <Text>
        You can add isIndeterminate for loading animation progress bar
      </Text>
      <Progress size="xl" colorScheme="warning" isIndeterminate value={85} /> */}
    </Box>
  );
}
