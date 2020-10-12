import React from 'react';
import { VStack, Switch } from 'native-base';

export default function () {
  return (
    <VStack space={50}>
    <Switch
      size="sm"
      // isInvalid
      // onColor="seagreen"
      // offColor="red"
      // switchTrackColor="#f8d7d9"
    />
    <Switch
      size="md"
      // isInvalid
      onColor="seagreen"
      offColor="red"
      // switchTrackColor="#f8d7d9"
    />
    <Switch
      size="lg"
      // isInvalid
      onColor="seagreen"
      offColor="red"
      // switchTrackColor="#f8d7d9"
    />
    </VStack>
  );
}
