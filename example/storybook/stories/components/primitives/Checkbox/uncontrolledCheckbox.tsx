import React from 'react';
import { Checkbox, CheckboxGroup, Text } from '@native-base/v3';

export default function UnControlledCheckbox() {
  return (
    <CheckboxGroup onChange={console.log}>
      <Checkbox value="one">
        <Text>Hello world</Text>
      </Checkbox>
      <Checkbox value="two">
        <Text>Hello world</Text>
      </Checkbox>
    </CheckboxGroup>
  );
}
