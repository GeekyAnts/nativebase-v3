import React from 'react';
import { HStack, Text, StackDivider, Heading, Stack } from 'native-base';

export default function () {
  return (
    <Stack space={4}>
      <Heading>HStack</Heading>
      <HStack divider={<StackDivider borderColor="red.2" />} reversed space={8}>
        <Text>Test Text</Text>
        <Text>Testing this text with HStacks</Text>
      </HStack>
    </Stack>
  );
}
