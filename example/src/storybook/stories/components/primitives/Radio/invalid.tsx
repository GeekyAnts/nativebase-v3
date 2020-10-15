import React from 'react';
import { Radio, Inline, Text, View } from 'native-base';

export default function () {
  return (
    <View display="flex" justifyContent="space-between" alignItems="center">
      <Inline>
        <Radio isInvalid>
          <Text mx={2}>Radio</Text>
        </Radio>
      </Inline>
    </View>
  );
}
