import React from 'react';
import { Circle, Square, Box, HStack } from 'native-base';
export default function () {
  return (
    <HStack>
      <Circle size={100} bg="tomato" color="white">
        <Box height={30} width={30} bg="red.3" />
      </Circle>
      <Square size={100} bg="blue.3" color="white">
        <Box height={30} width={30} bg="red.3" />
      </Square>
    </HStack>
  );
}
