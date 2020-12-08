import React from 'react';
import { Flex, Text, Center, Box, Square } from '@native-base/v3';

export default function () {
  return (
    <Flex h="100%">
      <Center h="100px" bg="green.500">
        <Text>Box 1</Text>
      </Center>
      <Square bg="blue.300" size="100px">
        <Text>Box 2</Text>
      </Square>
      <Box flex={1} bg="tomato">
        Box 3
      </Box>
    </Flex>
  );
}
