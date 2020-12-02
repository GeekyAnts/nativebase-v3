import React from 'react';
import { Text, useMediaQuery } from '@native-base/v3';

export default function () {
  const [isLandScape, isPortrait] = useMediaQuery([
    { orientation: 'landscape' },
    { orientation: 'portrait' },
  ]);
  return (
    <>
      <Text>{`Landscape Mode: ${isLandScape}`}</Text>
      <Text>{`Portrait Mode: ${isPortrait}`}</Text>
    </>
  );
}
