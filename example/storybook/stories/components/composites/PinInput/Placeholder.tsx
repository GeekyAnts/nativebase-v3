import React from 'react';
import { PinInput, PinInputField } from '@native-base/v3';

export default function () {
  return (
    <PinInput placeholder="🥳">
      <PinInputField />
      <PinInputField />
      <PinInputField />
    </PinInput>
  );
}
