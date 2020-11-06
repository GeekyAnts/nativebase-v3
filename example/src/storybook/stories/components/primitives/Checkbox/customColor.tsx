import React from 'react';
import { Checkbox, HStack, Text } from 'native-base';

export default function () {
  return (
    <HStack>
      <Checkbox colorScheme="danger.2" defaultIsChecked>
        <Text mx={2}>Danger</Text>
      </Checkbox>
      <Checkbox colorScheme="info.2" defaultIsChecked>
        <Text mx={2}>Info</Text>
      </Checkbox>
      <Checkbox colorScheme="#00face" defaultIsChecked>
        <Text mx={2}>#00face</Text>
      </Checkbox>
      <Checkbox colorScheme="orange.3" defaultIsChecked>
        <Text mx={2}>Orange</Text>
      </Checkbox>
      <Checkbox colorScheme="purple.3" defaultIsChecked>
        <Text mx={2}>Purple</Text>
      </Checkbox>
    </HStack>
  );
}
