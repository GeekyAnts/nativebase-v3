import React from 'react';
import { Text, VStack } from 'native-base';

export default function () {
  return (
    <VStack space={2} alignItems="center">
      <Text>
        This is the <Text bold>nested</Text> example.
      </Text>
    </VStack>
  );
}
