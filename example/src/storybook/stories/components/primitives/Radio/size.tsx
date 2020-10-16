import React from 'react';
import { Radio, RadioGroup, Inline, Text, View } from 'native-base';

export default function () {
  return (
    <View display="flex" justifyContent="space-between" alignItems="center">
      <Inline>
        <RadioGroup spacing={2} defaultValue="1">
          <Radio value="1" colorScheme="red" size="sm">
            <Text mx={2}>Small</Text>
          </Radio>
          <Radio value="2" colorScheme="green" size="md">
            <Text mx={2}>Medium</Text>
          </Radio>
          <Radio value="3" colorScheme="yellow" size="lg">
            <Text mx={2}>Large</Text>
          </Radio>
        </RadioGroup>
      </Inline>
    </View>
  );
}
