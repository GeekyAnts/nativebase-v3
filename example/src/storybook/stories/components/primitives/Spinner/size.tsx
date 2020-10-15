import React from 'react';
import { Spinner, View, Inline } from 'native-base';

export default function () {
  return (
    <View display="flex" justifyContent="space-between" alignItems="center">
      <Inline mb={2} alignItems="center">
        <Spinner mr={5} size="sm" />
        <Spinner size="lg" />
      </Inline>
    </View>
  );
}
