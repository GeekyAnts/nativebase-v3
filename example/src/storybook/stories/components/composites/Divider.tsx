import React from 'react';
import { Flex, Divider, Text } from 'native-base';

export default function () {
  return (
    <Flex>
      <Text>Verical</Text>
      <Divider mx={2} dividerColor="grey" orientation="vertical" />
      <Text>Divider</Text>
    </Flex>
  );
}
