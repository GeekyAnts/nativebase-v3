import React from 'react';
import { Radio, RadioGroup, Text } from 'native-base';

export default function () {
  return (
    <RadioGroup defaultValue="1">
      <Radio value="1" colorScheme="red.2" size="sm">
        <Text mx={2}>Small</Text>
      </Radio>
      <Radio value="2" colorScheme="green.2" size="md">
        <Text mx={2}>Medium</Text>
      </Radio>
      <Radio value="3" colorScheme="yellow.2" size="lg">
        <Text mx={2}>Large</Text>
      </Radio>
    </RadioGroup>
  );
}
