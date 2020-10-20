import React from 'react';
import { PinInput, PinInputField } from 'native-base';

export default function () {
  return (
    <PinInput placeholder="O" inputSize="md" value="32" defaultValue="98">
      <PinInputField />
      <PinInputField />
      <PinInputField />
    </PinInput>
  );
}
