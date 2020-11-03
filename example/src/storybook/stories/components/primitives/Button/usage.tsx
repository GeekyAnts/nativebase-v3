import React from 'react';
import { Button } from 'native-base';
import { select } from '@storybook/addon-knobs';

export default function () {
  return (
    <Button
      size="sm"
      colorScheme="teal"
      variant={select(
        'Variants',
        ['solid', 'ghost', 'link', 'outline'],
        'solid'
      )}
    >
      Button Variants
    </Button>
  );
}
