import { Text, SimpleGrid, Box } from '@native-base/v3';
import React from 'react';

export default function BasicSimpleGrid() {
  return (
    <Box>
      <SimpleGrid columns={3} spacing={50}>
        <Box>
          <Text>1</Text>
        </Box>
        <Box>
          <Text>2</Text>
        </Box>
        <Box>
          <Text>3</Text>
        </Box>
        <Box>
          <Text>4</Text>
        </Box>
        <Box>
          <Text>5</Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
