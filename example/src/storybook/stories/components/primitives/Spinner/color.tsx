import React from 'react';
import { Spinner, View, Inline } from 'native-base';

export default function () {
  return (
    <View display="flex" justifyContent="space-between" alignItems="center">
      <Inline>
        <Spinner m={2} color="danger" />
        <Spinner m={2} color="green" />
        <Spinner m={2} color="#0000ff" />
        <Spinner m={2} color="warning" />
      </Inline>
    </View>
  );
}
