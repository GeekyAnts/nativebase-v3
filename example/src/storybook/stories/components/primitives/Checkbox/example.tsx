import React from 'react';
import {
  Checkbox,
  CheckboxGroup,
  Heading,
  Inline,
  Text,
  View,
} from 'native-base';
import { boolean, select, text } from '@storybook/addon-knobs';

export default function () {
  const [toggleCheckBox, setToggleCheckBox] = React.useState(true);
  return (
    <View display="flex" justifyContent="space-between" alignItems="center">
      <Inline mb={2} alignItems="baseline">
        <Heading mt={3}>Checkbox </Heading>
        <Text>(with Knob) playaround</Text>
      </Inline>

      <Checkbox
        isDisabled={boolean('isDisabled', false)}
        colorScheme={text('colorScheme', 'default')}
        size={select('size', ['sm', 'md', 'lg'], 'md')}
        isChecked={boolean('isChecked', true)}
        value={text('value', 'Cool')}
        onChange={() => {
          setToggleCheckBox(!toggleCheckBox);
        }}
      >
        <Text mx={2}>Are you Awesome?</Text>
      </Checkbox>
      <Text>{toggleCheckBox ? 'Yes, you are..' : 'No, But you can be..'}</Text>
      <Heading mt={3}>Simplest Example</Heading>
      <Checkbox />
      <Inline mb={2} alignItems="baseline">
        <Heading mt={3}>Different Sizes </Heading>
        <Text>with color formats</Text>
      </Inline>
      <Inline>
        <Checkbox
          mt={3}
          isChecked={toggleCheckBox}
          colorScheme="danger"
          size="sm"
          value="Danger"
        >
          <Text mx={2}>Danger</Text>
        </Checkbox>
        <Checkbox
          mt={3}
          isChecked={toggleCheckBox}
          colorScheme="orange"
          value="danger"
          size="md"
        >
          <Text mx={2}>Orange</Text>
        </Checkbox>
        <Checkbox
          mt={3}
          isChecked={toggleCheckBox}
          colorScheme="purple"
          value="purple"
          size="lg"
        >
          <Text mx={2}>Purple</Text>
        </Checkbox>
      </Inline>
      <Inline mb={2} alignItems="baseline">
        <Heading mt={3}>CheckboxGroup </Heading>
        <Text>with common colorScheme</Text>
      </Inline>
      <CheckboxGroup
        spacing={2}
        colorScheme="green"
        defaultValue={['naruto', 'kakashi']}
        onChange={(values) => {
          console.log('values from example - ', values);
        }}
      >
        <Checkbox value="naruto">
          <Text>Naruto</Text>
        </Checkbox>
        <Checkbox value="sasuke">
          <Text>Sasuke</Text>
        </Checkbox>
        <Checkbox value="kakashi">
          <Text>Kakashi</Text>
        </Checkbox>
        <Checkbox isIndeterminate value="kabuto">
          <Text>Kabuto</Text>
        </Checkbox>
      </CheckboxGroup>
    </View>
  );
}
