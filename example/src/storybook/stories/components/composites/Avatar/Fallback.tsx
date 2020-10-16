import React from 'react';
import { Avatar, HStack } from 'native-base';

export default function () {
  return (
    <HStack>
      <Avatar mr={1} name="Rohit" src="https://bit.ly/broken-link" />
      <Avatar name="Rehman" src="https://bit.ly/broken-link" />
      <Avatar src="https://bit.ly/broken-link" />
    </HStack>
  );
}
