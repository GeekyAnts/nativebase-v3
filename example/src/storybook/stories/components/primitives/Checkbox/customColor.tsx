import React from 'react';
import { Checkbox, HStack, Text } from '@native-base/v3';

export default function () {
  return (
    <HStack>
      <Checkbox colorScheme="critical" defaultIsChecked>
        <Text mx={2}>Critical</Text>
      </Checkbox>
      <Checkbox colorScheme="info" defaultIsChecked>
        <Text mx={2}>Info</Text>
      </Checkbox>
      <Checkbox colorScheme="orange" defaultIsChecked>
        <Text mx={2}>Orange</Text>
      </Checkbox>
      <Checkbox colorScheme="purple" defaultIsChecked>
        <Text mx={2}>Purple</Text>
      </Checkbox>
    </HStack>
  );
}
