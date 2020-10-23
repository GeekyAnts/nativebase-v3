import React from 'react';
import { Code, Stack, Text, Heading } from 'native-base';
// import { select } from '@storybook/addon-knobs';
export default function () {
  return (
    <Stack space={4}>
      <Heading>Variants</Heading>
      <Text>Default :</Text>
      <Code>console.log('This is code block');</Code>
      <Text>Danger/Error/Red :</Text>
      <Code colorScheme="danger">console.log('This is code block');</Code>
      <Text>Success/Green :</Text>
      <Code colorScheme="success">console.log('This is code block');</Code>
      <Text>Knobs example :</Text>
      <Code
        colorScheme="dark"
        // colorScheme={select(
        //   'colorScheme',
        //   ['success', 'danger', 'warning', 'dark', 'light', 'muted', 'default'],
        //   'light'
        // )}
      >
        console.log('This is code block');
      </Code>
    </Stack>
  );
}
