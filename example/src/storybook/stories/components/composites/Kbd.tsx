import React from 'react';
import { Flex, Kbd, Text } from 'native-base';

export default function () {
  return (
    <Flex>
      <Kbd>Shift</Kbd>
      <Text pt={1}> + </Text>
      <Kbd>C</Kbd>
    </Flex>
  );
}
