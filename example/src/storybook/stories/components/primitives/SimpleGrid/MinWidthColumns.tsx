import { SimpleGrid, Box } from '@native-base/v3';
import React from 'react';
import { ScrollView } from 'react-native';

const items = 40;
const data = Array(items).fill(0);

export default function MinChildWidthSimpleGrid() {
  return (
    <ScrollView style={{ width: '100%' }}>
      <SimpleGrid minChildWidth={100} spacing={1}>
        {data.map((_item, index) => {
          return <Box key={index} bg="#d2d2d2" height={100}></Box>;
        })}
      </SimpleGrid>
    </ScrollView>
  );
}
