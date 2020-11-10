import React from 'react';
import { Stack, Box } from '@native-base/v3';
import { number } from '@storybook/addon-knobs';

export default function () {
  return (
    <Stack space={number('space', 3)} mb={number('mb', 3)}>
      <Box borderRadius={4} height={70} width={70} bg="blue.4" />
      <Box borderRadius={4} height={70} width={70} bg="purple.4" />
      <Box borderRadius={4} height={70} width={70} bg="yellow.4" />
    </Stack>
  );
}
