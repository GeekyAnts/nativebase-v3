import React from 'react';
import { Radio, RadioGroup, Inline, Text, View } from 'native-base';

export default function () {
  return (
    <View display="flex" justifyContent="space-between" alignItems="center">
      <Inline>
        <RadioGroup spacing={2} defaultValue="1">
          <Radio colorScheme="red" value="1">
            <Text mx={2}>red</Text>
          </Radio>
          <Radio colorScheme="#0000ff" value="2">
            <Text mx={2}>#0000ff</Text>
          </Radio>
          <Radio colorScheme="success" value="3">
            <Text mx={2}>success</Text>
          </Radio>
        </RadioGroup>
      </Inline>
    </View>
  );
}
