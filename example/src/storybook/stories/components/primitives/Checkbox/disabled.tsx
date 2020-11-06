import React from 'react';
import { Checkbox, Inline, Text } from 'native-base';

export default function () {
  return (
    <Inline>
      <Checkbox isDisabled>
        <Text m={2}>Checkbox</Text>
      </Checkbox>
      <Checkbox isDisabled defaultIsChecked>
        <Text m={2}>Checkbox</Text>
      </Checkbox>
    </Inline>
  );
}
