import React from 'react';
import { Tag, TagLabel, TagCloseButton, HStack } from 'native-base';

export default function () {
  return (
    <HStack space={1} alignItems="flex-start">
      {['xs', 'md', '2xl'].map((size) => (
        <Tag
          colorScheme="green"
          variant="solid"
          bg="red.2"
          rounded={100}
          size={size}
        >
          <TagLabel>NativeBase</TagLabel>
          <TagCloseButton />
        </Tag>
      ))}
    </HStack>
  );
}