import React from 'react';
import { Divider, HStack, Text } from 'native-base';

export default function () {
  return (
    <HStack height={100} p={4}>
      <Divider orientation="vertical" />
      <Text>Nativebase</Text>
    </HStack>
  );
}
