import React from 'react';
import { Radio, RadioGroup, Text } from 'native-base';

export default function () {
  return (
    <RadioGroup defaultValue="1">
      <Radio colorScheme="red.3" value="1">
        <Text mx={2}>red</Text>
      </Radio>
      <Radio colorScheme="#0face0" value="2">
        <Text mx={2}>#0face0</Text>
      </Radio>
      <Radio colorScheme="success.1" value="3">
        <Text mx={2}>success</Text>
      </Radio>
    </RadioGroup>
  );
}
