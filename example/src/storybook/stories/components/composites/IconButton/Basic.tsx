import React from 'react';
import { IconButton, Icon } from '@native-base/v3';
export default function () {
  return (
    <IconButton
      colorScheme="blue"
      variant="outline"
      icon={<Icon name={'search'} size={'lg'} />}
    />
  );
}
