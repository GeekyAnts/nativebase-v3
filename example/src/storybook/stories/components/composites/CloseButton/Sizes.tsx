import React from 'react';
import { CloseButton, HStack } from 'native-base';
export default function () {
  return (
    <HStack space="md">
      <CloseButton size="sm" color="teal.2" />
      <CloseButton size="md" color="red.2" />
      <CloseButton size="lg" color="blue.2" />
    </HStack>
  );
}
