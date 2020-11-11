import React from 'react';
import { Spinner, HStack } from '@native-base/v3';

export default function () {
  return (
    <HStack space={3}>
      <Spinner size="sm" />
      <Spinner size="lg" />
    </HStack>
  );
}
