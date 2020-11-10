import React from 'react';
import { Checkbox, HStack, Text, Icon } from '@native-base/v3';

export default function () {
  return (
    <HStack>
      <Checkbox
        colorScheme="orange"
        size="md"
        icon={<Icon name="bullseye" type="MaterialCommunityIcons" />}
        defaultIsChecked
      >
        <Text mx={2}>Darts</Text>
      </Checkbox>
      <Checkbox
        colorScheme="dark"
        size="md"
        icon={<Icon name="bat" type="MaterialCommunityIcons" />}
        defaultIsChecked
      >
        <Text mx={2}>Movie</Text>
      </Checkbox>
      <Checkbox
        colorScheme="red"
        size="md"
        icon={<Icon name="campfire" type="MaterialCommunityIcons" />}
        defaultIsChecked
      >
        <Text mx={2}>Camping</Text>
      </Checkbox>
      <Checkbox
        colorScheme="blue"
        size="md"
        icon={<Icon name="chess-knight" type="MaterialCommunityIcons" />}
        defaultIsChecked
      >
        <Text mx={2}>Chess</Text>
      </Checkbox>
    </HStack>
  );
}
