import React from 'react';
import { Center, Box, HStack, Text } from 'native-base';
export default function () {
  return (
    <HStack>
      <Center w="40px" h="40px" bg="tomato" color="white">
        {/* <Icon name=""/> */}
        <Box height={10} width={10} bg="red.3" />
      </Center>
      <Center w="40px" h="40px" bg="tomato" color="white">
        <Text fontWeight="bold" fontSize="lg">
          1
        </Text>
      </Center>
    </HStack>
  );
}
