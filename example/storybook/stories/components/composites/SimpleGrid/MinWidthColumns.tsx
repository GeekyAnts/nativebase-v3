import { SimpleGrid, Box } from '@native-base/v3';
import React from 'react';

const items = 12;
const data = Array(items).fill(0);

export default function MinChildWidthSimpleGrid() {
  return (
    <SimpleGrid minChildWidth={60} spacing={4}>
      {data.map((_item, index) => {
        return <Box key={index} bg="#d2d2d2" height={60} width={60} />;
      })}
    </SimpleGrid>
  );
}
