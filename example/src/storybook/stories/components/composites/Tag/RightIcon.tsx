import React from 'react';
import { Tag, TagLabel, TagRightIcon, HStack } from 'native-base';
import { text } from '@storybook/addon-knobs';

export default function () {
  return (
    <HStack space={4} alignItems="flex-start">
      {['xs', 'md', '2xl'].map((size) => (
        <Tag
          colorScheme="green"
          variant="solid"
          bg="red.2"
          rounded={100}
          size={size}
        >
          <TagLabel>Menu</TagLabel>
          <TagRightIcon
            name={text('name', 'menu')}
            type="MaterialIcons"
            color="white"
          />
        </Tag>
      ))}
    </HStack>
  );
}
