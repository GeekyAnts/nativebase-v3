import React from 'react';
import { Heading, Spinner, View, Text, Inline } from 'native-base';
import { color, select } from '@storybook/addon-knobs';

export default function () {
  return (
    <View display="flex" justifyContent="space-between" alignItems="center">
      <Inline mb={2} alignItems="baseline">
        <Heading mt={3}>Spinner </Heading>
        <Text>(with Knob) playaround</Text>
      </Inline>
      <Spinner
        size={select('size', ['sm', 'lg'], 'lg')}
        color={color('color', 'blue')}
      />
    </View>
  );
}
