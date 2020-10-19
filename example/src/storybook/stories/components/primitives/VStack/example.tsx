import React from 'react';
import { VStack, Text, StackDivider } from 'native-base';

export default function () {
  return (
    <VStack
      divider={<StackDivider borderColor="red.2" />}
      // space={4}
      width={100}
    >
      <Text>Test Text</Text>
      <Text>Testing this text with Stacks</Text>
      <Text>Testing this text with Stacks</Text>
      <Text>Testing this text with Stacks</Text>
    </VStack>
  );
}
