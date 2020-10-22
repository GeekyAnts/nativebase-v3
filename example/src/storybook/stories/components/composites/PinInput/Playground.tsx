import React from 'react';
import { PinInput, PinInputField } from 'native-base';
import { select, text } from '@storybook/addon-knobs';

export default function () {
  return (
    <PinInput
      placeholder={text('placeholder', '○')}
      inputSize={text('inputSize', 'sm')}
      colorScheme={text('colorScheme', '')}
      variant={select(
        'variantType',
        ['outline', 'underlined', 'rounded', 'filled', 'unstyled'],
        'outline'
      )}
      defaultValue={text('defaultValue', '96')}
    >
      <PinInputField />
      <PinInputField />
      <PinInputField />
    </PinInput>
  );
}
