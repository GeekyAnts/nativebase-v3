import React from 'react';
import { CloseButton, HStack } from 'native-base';
export default function () {
  return (
    <HStack space="md">
      <CloseButton size="sm" color="rgba(25,255,255,1)" />
      <CloseButton size="md" />
      <CloseButton size="lg" />
    </HStack>
  );
}
