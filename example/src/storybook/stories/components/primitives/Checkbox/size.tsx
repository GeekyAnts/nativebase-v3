import React from 'react';
import { Checkbox, Inline, Text, View } from 'native-base';

export default function () {
  return (
    <View display="flex" justifyContent="space-between" alignItems="center">
      <Inline>
        <Checkbox colorScheme="red" size="sm" defaultIsChecked>
          <Text mx={2}>Checkbox</Text>
        </Checkbox>
        <Checkbox colorScheme="green" size="md" defaultIsChecked>
          <Text mx={2}>Checkbox</Text>
        </Checkbox>
        <Checkbox colorScheme="yellow" size="lg" defaultIsChecked>
          <Text mx={2}>Checkbox</Text>
        </Checkbox>
      </Inline>
    </View>
  );
}
