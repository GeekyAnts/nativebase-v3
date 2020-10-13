import React from 'react';
import { Checkbox, Heading, Inline, Text, View } from 'native-base';
import { boolean, color, select, text } from '@storybook/addon-knobs';

export default function () {
  const [toggleCheckBox, setToggleCheckBox] = React.useState(true);
  return (
    <>
      <View display="flex" justifyContent="space-between" alignItems="center">
        <Inline mb={2} alignItems="baseline">
          <Heading mt={3}>Checkbox </Heading>
          <Text>(with Knob) playaround</Text>
        </Inline>

        <Checkbox
          isDisabled={boolean('isDisabled', false)}
          size={select('size', ['sm', 'md', 'lg'], 'md')}
          // color={color('color', 'blue')}
          isChecked={toggleCheckBox}
          onChange={(value) => {
            console.log('onChange (value) - ', value);

            setToggleCheckBox(!toggleCheckBox);
          }}
        >
          <Text ml={2}>Are you Awesome?</Text>
        </Checkbox>
        <Heading mt={3}>Simplest Example</Heading>
        <Checkbox
          isChecked={toggleCheckBox}
          onChange={(value) => {
            setToggleCheckBox(!toggleCheckBox);
          }}
        />
        <Inline mb={2} alignItems="baseline">
          <Heading mt={3}>Different Sizes </Heading>
          <Text>with color formats</Text>
        </Inline>
        <Checkbox
          mt={3}
          isChecked={toggleCheckBox}
          colorScheme="danger"
          size="sm"
          onChange={(value) => {
            setToggleCheckBox(!toggleCheckBox);
          }}
        >
          <Text ml={2}>Danger</Text>
        </Checkbox>
        <Checkbox
          mt={3}
          isChecked={toggleCheckBox}
          colorScheme="orange"
          size="md"
          onChange={(value) => {
            setToggleCheckBox(!toggleCheckBox);
          }}
        >
          <Text ml={2}>Orange</Text>
        </Checkbox>
        <Checkbox
          mt={3}
          isChecked={toggleCheckBox}
          colorScheme="purple"
          size="lg"
          onChange={(value) => {
            setToggleCheckBox(!toggleCheckBox);
          }}
        >
          <Text ml={2}>Purple</Text>
        </Checkbox>
      </View>
    </>
  );
}
