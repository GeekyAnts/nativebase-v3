import React from 'react';
import { VStack, Text, Divider, Heading } from '@native-base/v3';
import { number } from '@storybook/addon-knobs';

export default function () {
  return (
    <VStack
      divider={<Divider borderColor="red.2" />}
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
