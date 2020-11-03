import React from 'react';
import { Button, HStack, Icon } from 'native-base';

export default function () {
  return (
    <HStack space={2}>
      <Button
        variant="solid"
        leftIcon={<Icon name="menu" size={10} type="MaterialIcons" />}
        size="xs"
        colorScheme="dark"
      >
        Left Icon Button
      </Button>
      <Button
        isDisabled
        rightIcon={<Icon name="menu" size={10} type="MaterialIcons" />}
        variant="solid"
        size="xs"
        colorScheme="danger"
      >
        Right Icon Button
      </Button>
    </HStack>
  );
}
