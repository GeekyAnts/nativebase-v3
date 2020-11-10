import React from 'react';
import { Spinner, HStack } from '@native-base/v3';

export default function () {
  return (
    <HStack space={2}>
      <Spinner color="danger.5" />
      <Spinner color="green.5" />
      <Spinner color="blue.5" />
      <Spinner color="warning.1" />
    </HStack>
  );
}
