import React from 'react';
import { ZStack, Box, Text } from '@native-base/v3';

export default function () {
  return (
    <Box px={8}>
      <ZStack alignItems="center" justifyContent="center" height="50%">
        <Box p={24} bg="blue.500" />
        <Box p={16} bg="black" />
        <Box p={10} bg="red.200" />
        <Text>Not Inside</Text>
      </ZStack>
      <Text lineHeight={8} letterSpacing={1.2} textAlign="center">
        Pass alignItems="center" and justifyContent="center" to ZStack to
        achieve this structure
      </Text>
    </Box>
  );
}
