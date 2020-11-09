import React from 'react';
import { Checkbox, HStack, Text } from 'native-base';

export default function () {
  return (
    <HStack>
      <Checkbox isDisabled>
        <Text m={2}>Checkbox</Text>
      </Checkbox>
      <Checkbox isDisabled defaultIsChecked>
        <Text m={2}>Checkbox</Text>
      </Checkbox>
    </HStack>
  );
}
