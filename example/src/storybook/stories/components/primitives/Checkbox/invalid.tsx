import React from 'react';
import { Checkbox, Inline, Text } from 'native-base';

export default function () {
  return (
    <Inline>
      <Checkbox isInvalid>
        <Text mx={2}>Checkbox</Text>
      </Checkbox>
    </Inline>
  );
}
