import React from 'react';
import { Spinner, View, Inline } from 'native-base';

export default function () {
  return (
    <View display="flex" justifyContent="space-between" alignItems="center">
      <Inline>
        <Spinner m={2} color="danger.5" />
        <Spinner m={2} color="green.5" />
        <Spinner m={2} color="blue.5" />
        <Spinner m={2} color="warning.1" />
      </Inline>
    </View>
  );
}
