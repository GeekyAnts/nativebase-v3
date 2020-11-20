import React from 'react';
import { Tag, HStack } from '@native-base/v3';

export default function () {
  return (
    <HStack space={4} alignItems="flex-start">
      {['sm', 'md', 'lg'].map((size) => (
        <Tag size={size} key={size} variant="solid" colorScheme="green">
          NativeBase
        </Tag>
      ))}
    </HStack>
  );
}
