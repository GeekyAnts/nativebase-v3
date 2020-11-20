import { SimpleGrid, Box } from '@native-base/v3';
import React from 'react';

const items = 12;
const data = Array(items).fill(0);

export default function NumberOfColumnsSimpleGrid() {
  return (
    <SimpleGrid columns={3} spacing={2}>
      {data.map((_item, index) => {
        return <Box key={index} height={100} bg="#d1d1d1"></Box>;
      })}
    </SimpleGrid>
  );
}
