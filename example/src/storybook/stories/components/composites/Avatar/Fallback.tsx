import React from 'react';
import { Avatar, HStack } from '@native-base/v3';

export default function () {
  return (
    <HStack>
      <Avatar
        mr={1}
        name="Rohit"
        source={{ uri: 'https://bit.ly/broken-link' }}
      />
      <Avatar name="Rehman" source={{ uri: 'https://bit.ly/broken-link' }} />
      <Avatar source={{ uri: 'https://bit.ly/broken-link' }} />
    </HStack>
  );
}
