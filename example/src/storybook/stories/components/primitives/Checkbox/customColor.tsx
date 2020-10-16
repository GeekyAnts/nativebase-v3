import React from 'react';
import { Checkbox, Inline, Text, View } from 'native-base';

export default function () {
  return (
    <View display="flex" justifyContent="space-between" alignItems="center">
      <Inline m="auto">
        <Checkbox colorScheme="danger" defaultIsChecked>
          <Text mx={2}>Danger</Text>
        </Checkbox>
        <Checkbox colorScheme="info">
          <Text mx={2}>Info</Text>
        </Checkbox>
        <Checkbox colorScheme="#0000ff" defaultIsChecked>
          <Text mx={2}>#0000ff</Text>
        </Checkbox>
        <Checkbox colorScheme="orange">
          <Text mx={2}>Orange</Text>
        </Checkbox>
        <Checkbox colorScheme="purple" defaultIsChecked>
          <Text mx={2}>Purple</Text>
        </Checkbox>
      </Inline>
    </View>
  );
}
