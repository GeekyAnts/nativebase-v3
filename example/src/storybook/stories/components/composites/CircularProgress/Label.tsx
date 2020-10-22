import React from 'react';
import {
  CircularProgress,
  Heading,
  Center,
  CircularProgressLabel,
} from 'native-base';
import { text, number } from '@storybook/addon-knobs';
export default function () {
  return (
    <Center>
      <Heading>Adding label</Heading>
      <CircularProgress
        mt={6}
        value={45}
        size={number('Size(in px)', 60)}
        color={text('Color', 'red.2')}
      >
        <CircularProgressLabel>45%</CircularProgressLabel>
      </CircularProgress>
    </Center>
  );
}
