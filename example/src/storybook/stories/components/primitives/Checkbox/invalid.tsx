import React from 'react';
import { Checkbox, Inline, Text, View } from 'native-base';

export default function () {
  return (
    <View display="flex" justifyContent="space-between" alignItems="center">
      <Inline>
        <Checkbox isInvalid>
          <Text mx={2}>Checkbox</Text>
        </Checkbox>
      </Inline>
    </View>
  );
}
