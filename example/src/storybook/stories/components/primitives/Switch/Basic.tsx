import React from 'react';
import { Switch, HStack, Text } from '@native-base/v3';

export default function () {
  return (
    <HStack>
      <Text>Enable email alerts?</Text>
      <Switch />
    </HStack>
  );
}
