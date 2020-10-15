import React from 'react';
import { Circle, Square, Box, HStack } from 'native-base';
export default function () {
  return (
    <HStack>
      <Circle size="40px" bg="tomato" color="white">
        <Box height={10} width={10} bg="red.3" />
      </Circle>
      <Square size="40px" bg="purple.700" color="white">
        <Box height={10} width={10} bg="red.3" />
      </Square>
    </HStack>
  );
}
