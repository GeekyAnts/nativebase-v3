import React from 'react';
import { VStack, Text, StackDivider, Heading } from 'native-base';
import { number } from '@storybook/addon-knobs';

export default function () {
  return (
    <VStack
      divider={<StackDivider borderColor="red.2" />}
      space={number('Space', 4)}
      width="100%"
    >
      <Heading>VStack</Heading>
      <Text>Test Text</Text>
      <Text>Testing this text with Stacks</Text>
      <Text>Testing this text with Stacks</Text>
      <Text>Testing this text with Stacks</Text>
    </VStack>
  );
}
