import React from 'react';
import { Center, Box, HStack } from 'native-base';
export default function () {
  return (
    <HStack>
      <Center w="40px" h="40px" bg="blue.2" color="white">
        {/* <Icon name=""/> */}
        <Box height={20} width={20} bg="red.3" />
      </Center>
      <Center w="40px" h="40px" bg="tomato" color="white">
        1
      </Center>
    </HStack>
  );
}
