import React from 'react';
import { Columns, Column } from 'native-base';
import { number } from '@storybook/addon-knobs';

export default function () {
  return (
    <Columns
      space={number('space', 3)}
      height={number('height', 100)}
      mb={number('mb', 3)}
    >
      <Column
        borderRadius={number('borderRadius', 4)}
        flexGrow={number('flexGrow', 1)}
        bg="green.1"
      />
      <Column
        borderRadius={number('borderRadius', 4)}
        width={1 / 2.5}
        bg="pink.1"
      />
      <Column
        borderRadius={number('borderRadius', 4)}
        flexGrow={number('flexGrow', 1.5)}
        bg="indigo.4"
      />
    </Columns>
  );
}
