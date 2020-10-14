import React from 'react';
import {
  Radio,
  RadioGroup,
  Heading,
  Inline,
  Text,
  View,
  HStack,
} from 'native-base';
import { boolean, select, text } from '@storybook/addon-knobs';

export default function () {
  const [toggleCheckBox, setToggleCheckBox] = React.useState(true);
  return (
    <View display="flex" justifyContent="space-between" alignItems="center">
      <Inline mb={2} alignItems="baseline">
        <Heading mt={3}>Radio </Heading>
        <Text>(with Knob) playaround</Text>
      </Inline>

      <Radio
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
      </Radio>
      <Text>{toggleCheckBox ? 'Yes, you are..' : 'No, But you can be..'}</Text>
      <Heading mt={3}>Simplest Example</Heading>
      <Radio />
      <Inline mb={2} alignItems="baseline">
        <Heading mt={3}>Different Sizes </Heading>
        <Text>with color formats</Text>
      </Inline>
      <Inline>
        <Radio
          mt={3}
          isChecked={toggleCheckBox}
          colorScheme="danger"
          size="sm"
          value="Danger"
        >
          <Text mx={2}>Danger</Text>
        </Radio>
        <Radio
          mt={3}
          isChecked={toggleCheckBox}
          colorScheme="orange"
          value="danger"
          size="md"
        >
          <Text mx={2}>Orange</Text>
        </Radio>
        <Radio
          mt={3}
          isChecked={toggleCheckBox}
          colorScheme="purple"
          value="purple"
          size="lg"
        >
          <Text mx={2}>Purple</Text>
        </Radio>
      </Inline>

      {/* NOTE: RADIO GROUP */}
      <Inline mb={2} alignItems="baseline">
        <Heading mt={3}>RadioGroup </Heading>
        <Text>with common colorScheme</Text>
      </Inline>
      <HStack>
        <Text>dsdads</Text>
        <Text>dsdads</Text>
      </HStack>
      <HStack>
        <RadioGroup
          spacing={2}
          colorScheme="green"
          defaultValue="naruto"
          onChange={(value) => {
            console.log('values from example - ', value);
          }}
        >
          <Radio value="naruto">
            <Text>Naruto</Text>
          </Radio>
          <Radio value="sasuke">
            <Text>Sasuke</Text>
          </Radio>
          <Radio value="kakashi">
            <Text>Kakashi</Text>
          </Radio>
          <Radio value="kabuto">
            <Text>Kabuto</Text>
          </Radio>
        </RadioGroup>
      </HStack>
    </View>
  );
}
