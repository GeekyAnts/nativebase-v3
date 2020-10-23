import React from 'react';
import { Code, Stack } from 'native-base';
export default function () {
  return (
    <Stack space={4}>
      <Code colorScheme="success">console.log('This is code block');</Code>
    </Stack>
  );
}
