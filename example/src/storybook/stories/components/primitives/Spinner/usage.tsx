import React from 'react';
import { Spinner, View } from 'native-base';

export default function () {
  return (
    <View display="flex" justifyContent="space-between" alignItems="center">
      <Spinner />
    </View>
  );
}
