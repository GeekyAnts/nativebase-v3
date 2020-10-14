import React from 'react';
import { Radio, RadioGroup, Inline, Text, View } from 'native-base';

export default function () {
  return (
    <View display="flex" justifyContent="space-between" alignItems="center">
      <Inline>
        <RadioGroup spacing={2} defaultValue="1">
          <Radio value="1">
            <Text mx={2}>First</Text>
          </Radio>
          <Radio value="2">
            <Text mx={2}>Second</Text>
          </Radio>
          <Radio value="3">
            <Text mx={2}>Third</Text>
          </Radio>
        </RadioGroup>
      </Inline>
    </View>
  );
}
