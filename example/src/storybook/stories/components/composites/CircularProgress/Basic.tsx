import React from 'react';
import { CircularProgress, Heading, Center } from '@native-base/v3';
export default function () {
  return (
    <Center>
      <Heading>Default CircularProgress</Heading>
      <CircularProgress mt={6} value={80} accessibilityLabel="Loading posts" />
    </Center>
  );
}
