import React from 'react';
import { Badge } from 'native-base';
import { select, text } from '@storybook/addon-knobs';

export default function () {
  return (
    <Badge
      variant={text('colorScheme', 'success')}
      variantType={select(
        'variantType',
        ['outline', 'solid', 'subtle'],
        'solid'
      )}
    >
      NativeBase Badge
    </Badge>
  );
}
