import React from 'react';
import { Stack, Box, Column, Text } from 'native-base';
import { number } from '@storybook/addon-knobs';
export default function () {
  return (
    <Stack flexGrow={number('flexGrow', 1)}>
      <Box bg="gray.1" height={55} justifyContent="center" alignItems="center">
        <Text>Header</Text>
      </Box>
      <Column flexGrow={number('flexGrow', 1)}>
        <Box
          bg="gray.1"
          width={0.15 / 1}
          justifyContent="center"
          alignItems="center"
          flexGrow={number('flexGrow', 1)}
        >
          <Text>Left Panel</Text>
        </Box>
        <Box bg="gray.1" width={0.65 / 1} flexGrow={number('flexGrow', 1)}>
          <Stack
            height={number('height', 200)}
            flexGrow={number('flexGrow', 1)}
          >
            <Box bg="gray.1" height={65} />
            <Column flexGrow={number('flexGrow', 1)} m={30}>
              <Box
                bg="primary"
                borderRadius={number('borderRadius', 4)}
                flexGrow={number('flexGrow', 1)}
                mx={20}
              />
              <Box
                bg="green.1"
                borderRadius={number('borderRadius', 4)}
                flexGrow={number('flexGrow', 1)}
                mx={20}
              />
              <Box
                bg="green.1"
                borderRadius={number('borderRadius', 4)}
                flexGrow={number('flexGrow', 1)}
                mx={20}
              />
            </Column>

            <Box
              bg="gray.1"
              height={number('height', 80)}
              flexGrow={number('flexGrow', 1)}
            />
          </Stack>
        </Box>
        <Box
          bg="gray.1"
          width={0.2 / 1}
          justifyContent="center"
          alignItems="center"
          flexGrow={number('flexGrow', 1)}
        >
          <Text>Right Panel</Text>
        </Box>
      </Column>
    </Stack>
  );
}
