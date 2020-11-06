import React from 'react';
import { Badge, Inline } from 'native-base';

export default function () {
  return (
    <Inline>
      <Badge m={2} colorScheme="success">
        SUCCESS
      </Badge>
      <Badge m={2} colorScheme="danger">
        DANGER
      </Badge>
      <Badge m={2} colorScheme="gray">
        GRAY
      </Badge>
      <Badge m={2} colorScheme="dark">
        DARK
      </Badge>
    </Inline>
  );
}
