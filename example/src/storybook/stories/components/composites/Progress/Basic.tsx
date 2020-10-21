import React from 'react';
import { Box, Progress, Heading, Center, Text } from 'native-base';
import { number } from '@storybook/addon-knobs';

export default function () {
  return (
    <Box w="90%">
      <Center mb={8}>
        <Heading>This is a Simple Progress Bar</Heading>
        <Text>(You can edit the value using knobs)</Text>
      </Center>
      <Progress size="xl" value={number('Value', 45)} />
    </Box>
  );
}
