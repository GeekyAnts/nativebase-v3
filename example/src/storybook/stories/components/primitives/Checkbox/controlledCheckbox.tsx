import React from 'react';
import { Checkbox, CheckboxGroup, Text } from '@native-base/v3';
import type { ICheckboxValue } from 'src/components/primitives/Checkbox/props';

export default function ControlledCheckbox() {
  const [groupValues, setGroupValues] = React.useState<Array<ICheckboxValue>>(
    []
  );

  return (
    <CheckboxGroup onChange={setGroupValues} value={groupValues}>
      <Checkbox value="one">
        <Text>Hello world</Text>
      </Checkbox>
      <Checkbox value="two">
        <Text>Hello world</Text>
      </Checkbox>
    </CheckboxGroup>
  );
}
