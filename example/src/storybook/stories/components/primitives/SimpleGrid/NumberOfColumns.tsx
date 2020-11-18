import { SimpleGrid, Box } from '@native-base/v3';
import React from 'react';
import { Image, ScrollView } from 'react-native';

const items = 20;
const data = Array(items).fill(0);

export default function NumberOfColumnsSimpleGrid() {
  return (
    <ScrollView style={{ width: '100%' }}>
      <SimpleGrid columns={2} spacing={1}>
        {data.map((_item, index) => {
          return (
            <Box key={index}>
              <Image
                source={{
                  uri:
                    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
                }}
                style={{
                  flex: 1,
                  aspectRatio: 16 / 9,
                }}
              ></Image>
            </Box>
          );
        })}
      </SimpleGrid>
    </ScrollView>
  );
}
