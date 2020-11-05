import React, { useState } from 'react';
import { TextArea, Heading, Center, Text, Stack } from 'native-base';
import { select, number, text } from '@storybook/addon-knobs';

export default function () {
  const [textAreaValue, setTextAreaValue] = useState('Value Controlled');
  const demoValueControlledTextArea = (e: any) => {
    setTextAreaValue(e.currentTarget.value);
  };
  return (
    <Stack space={4}>
      <Center>
        <Heading>TextArea</Heading>
      </Center>
      <Center>
        <Text>Default TextArea</Text>
      </Center>
      <TextArea
        isInvalid
        placeholder={text('Placeholder', 'Add custom placeholder using knobs')}
      />
      <Center>
        <Text>TextArea with different font sizes</Text>
      </Center>
      <TextArea
        inputSize={select(
          'Text Size',
          ['xsm', 'sm', 'md', 'lg', 'xl', '2xl'],
          'sm'
        )}
      />
      <Center>
        <Text>Define height of TextArea with size</Text>
      </Center>
      <TextArea w="100%" size={number('TextArea Size', 40)} />
      <Center>
        <Text>Invalid TextArea</Text>
      </Center>
      <TextArea isInvalid />
      <Center>
        <Text>Disabled TextArea</Text>
      </Center>
      <TextArea isDisabled />
      <Center>
        <Text>Value Controlled TextArea</Text>
      </Center>
      <TextArea value={textAreaValue} onChange={demoValueControlledTextArea} />
    </Stack>
  );
}
