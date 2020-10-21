import React from 'react';
import { Code, Stack, Text, Heading } from 'native-base';
import { select } from '@storybook/addon-knobs';
export default function () {
  return (
    <Stack space={4}>
      <Heading>Variants</Heading>
      <Text>Danger/Error/Red :</Text>
      <Code colorScheme="red">console.log('This is code block');</Code>
      <Text>Success/Green :</Text>
      <Code colorScheme="success">console.log('This is code block');</Code>
      <Text>Knobs example :</Text>
      <Code
        colorScheme={select(
          'colorScheme',
          [
            'success',
            'green',
            'danger',
            'error',
            'red',
            'warning',
            'yellow',
            'light',
            'white',
            'dark',
            'black',
            'muted',
            'secondary',
            'comment',
            'grey',
            'default',
          ],
          'yellow'
        )}
      >
        console.log('This is code block');
      </Code>
    </Stack>
  );
}
