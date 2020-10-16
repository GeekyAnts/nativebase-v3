import React from 'react';
import { Wrap, Center } from 'native-base';
export default function () {
  return (
    <Wrap>
      <Center w="180px" h="80px" bg="red.2">
        Box 1
      </Center>
      <Center w="180px" h="80px" bg="green.2">
        Box 2
      </Center>
      <Center w="180px" h="80px" bg="tomato">
        Box 3
      </Center>
      <Center w="180px" h="80px" bg="blue.2">
        Box 4
      </Center>
    </Wrap>
  );
}
