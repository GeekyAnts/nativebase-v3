import React from 'react';
import { Badge, Inline } from 'native-base';

export default function () {
  return (
    <Inline>
      <Badge mx={2} colorScheme="success" variant="solid">
        SOLID
      </Badge>
      <Badge mx={2} colorScheme="success">
        SUBTLE
      </Badge>
      <Badge mx={2} colorScheme="success" variant="outline">
        OUTLINE
      </Badge>
    </Inline>
  );
}
