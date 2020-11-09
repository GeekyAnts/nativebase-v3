import React from 'react';
import { Radio, Text, View } from 'native-base';
import { boolean, select, text } from '@storybook/addon-knobs';

export default function () {
  const [toggleCheckBox, setToggleCheckBox] = React.useState(true);
  const radioValue = text('value', 'Cool');
  return (
    <View display="flex" justifyContent="space-between" alignItems="center">
      <Radio
        colorScheme={text('colorScheme', 'default')}
        size={select('size', ['sm', 'md', 'lg'], 'md')}
        defaultIsChecked={boolean('defaultIsChecked', true)}
        isChecked={boolean('isChecked', true)}
        isDisabled={boolean('isDisabled', false)}
        isInvalid={boolean('isInvalid', false)}
        value={radioValue}
        onChange={() => setToggleCheckBox(!toggleCheckBox)}
      >
        <Text mx={2}>Are you Awesome?</Text>
      </Radio>
      <Text>
        {toggleCheckBox ? 'Yes, you are and also ' : 'No, But you are '}
        {radioValue}
      </Text>
    </View>
  );
}
