import React from 'react';
import { Radio, RadioGroup, Text, Icon } from '@native-base/v3';

export default function () {
  return (
    <RadioGroup defaultValue="1" size="lg">
      <Radio
        colorScheme="green"
        value="1"
        icon={<Icon name="alien" type="MaterialCommunityIcons" />}
      >
        <Text mx={2}>Alien</Text>
      </Radio>
      <Radio
        colorScheme="red"
        value="2"
        icon={<Icon name="fire" type="MaterialCommunityIcons" />}
      >
        <Text mx={2}>Fire</Text>
      </Radio>
      <Radio
        colorScheme="warning"
        value="3"
        icon={<Icon name="exclamation-thick" type="MaterialCommunityIcons" />}
      >
        <Text mx={2}>Warning</Text>
      </Radio>
    </RadioGroup>
  );
}
