import React from 'react';
import { HStack, Text, StackDivider } from 'native-base';

export default function () {
  return (
    <HStack divider={<StackDivider borderColor="red.2" />} reversed space={8}>
      <Text>Test Text</Text>
      <Text>Testing this text with HStacks</Text>
    </HStack>
  );
}
