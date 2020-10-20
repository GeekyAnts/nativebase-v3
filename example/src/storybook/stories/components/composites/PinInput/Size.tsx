import React from 'react';
import { PinInput, PinInputField, Stack } from 'native-base';

export default function () {
  return (
    <Stack space={5}>
      <PinInput inputSize="2xl">
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
      <PinInput inputSize="xl">
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
      <PinInput inputSize="lg">
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
      <PinInput inputSize="md">
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
      <PinInput inputSize="sm">
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
      <PinInput inputSize="xsm">
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
    </Stack>
  );
}
