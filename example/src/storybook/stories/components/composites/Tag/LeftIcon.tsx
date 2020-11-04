import React from 'react';
import { Tag, TagLabel, TagLeftIcon, HStack } from 'native-base';

export default function () {
  return (
    <HStack space={4} alignItems="flex-start">
      {['sm', 'md', 'lg'].map((size) => (
        <Tag
          colorScheme="green"
          variant="solid"
          bg="red.2"
          rounded={100}
          size={size}
        >
          <TagLeftIcon name={'menu'} type="MaterialIcons" color="white" />
          <TagLabel>Menu</TagLabel>
        </Tag>
      ))}
    </HStack>
  );
}
