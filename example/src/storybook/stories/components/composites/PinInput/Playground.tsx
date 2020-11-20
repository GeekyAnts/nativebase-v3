import React from 'react';
import { PinInput, PinInputField } from '@native-base/v3';
import { select, text } from '@storybook/addon-knobs';

export default function () {
  return (
    <PinInput
      placeholder={text('placeholder', '○')}
      size={text('Size', 'sm')}
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
