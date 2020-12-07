import React from 'react';
import { Radio, RadioGroup, Text, View } from '@native-base/v3';
import { boolean, select, text } from '@storybook/addon-knobs';

export default function () {
  const [toggleCheckBox] = React.useState(true);
  const radioValue = text('value', 'Cool');
  return (
    <View display="flex" justifyContent="space-between" alignItems="center">
      <RadioGroup name="exampleGroup">
        <Radio
          colorScheme={text('colorScheme', 'default')}
          size={select('size', ['sm', 'md', 'lg'], 'md')}
          isDisabled={boolean('isDisabled', false)}
          isInvalid={boolean('isInvalid', false)}
          value={radioValue}
        >
          <Text mx={2}>Are you Awesome?</Text>
        </Radio>
        <Text>
          {toggleCheckBox ? 'Yes, you are and also ' : 'No, But you are '}
          {radioValue}
        </Text>
      </RadioGroup>
    </View>
  );
}
