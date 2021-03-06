import React from 'react';
import { Text, useMediaQuery } from '@native-base/v3';

export default function () {
  const [isLargerThan512] = useMediaQuery({ minWidth: 512 });
  return (
    <Text>
      {isLargerThan512 ? 'Width larger than 512' : 'Width smaller than 512'}
    </Text>
  );
}
