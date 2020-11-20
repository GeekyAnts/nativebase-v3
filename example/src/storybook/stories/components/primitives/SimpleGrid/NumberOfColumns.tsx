import { SimpleGrid, Box } from '@native-base/v3';
import React from 'react';
import { Image } from 'react-native';

const items = 10;
const data = Array(items).fill(0);

export default function NumberOfColumnsSimpleGrid() {
  return (
    <SimpleGrid columns={3} spacing={2}>
      {data.map((_item, index) => {
        return (
          <Box key={index}>
            <Image
              source={{
                uri:
                  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
              }}
              style={{
                height: 60,
                aspectRatio: 16 / 9,
              }}
            />
          </Box>
        );
      })}
    </SimpleGrid>
  );
}
