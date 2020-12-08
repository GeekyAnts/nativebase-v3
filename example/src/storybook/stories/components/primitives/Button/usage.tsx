import React from 'react';
import { Alert } from 'react-native';
import { Button } from '@native-base/v3';

export default function () {
  return (
    <Button
      size="sm"
      colorScheme="teal"
      variant={'solid'}
      onPress={() => Alert.alert('hello world')}
    >
      Button Variants
    </Button>
  );
}
