import React from 'react';
import { Code, Stack, Heading } from 'native-base';
export default function () {
  return (
    <Stack space={4}>
      <Heading>Default Code Block</Heading>
      <Code>console.log('This is code block');</Code>
    </Stack>
  );
}
