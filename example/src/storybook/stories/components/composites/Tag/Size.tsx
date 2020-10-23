import React from 'react';
import { Tag, HStack } from 'native-base';

export default function () {
  return (
    <HStack space={4} alignItems="flex-start">
      {['xs', 'md', '2xl'].map((size) => (
        <Tag size={size} key={size} variant="solid" colorScheme="green">
          NativeBase
        </Tag>
      ))}
    </HStack>
  );
}
