import React from 'react';
import { Flex, Text, Spacer, Center } from '@native-base/v3';

export const SpacerExample = () => {
  return (
    <Flex direction="row">
      <Center w="100px" bg="tomato">
        <Text>Box 1</Text>
      </Center>
      <Spacer />
      <Center bg="green.5" h="100" w="100px">
        <Text>Box 2</Text>
      </Center>
    </Flex>
  );
};
