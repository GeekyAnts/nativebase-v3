import React from 'react';
import { Box, Grid, GridItem, Text } from '@native-base/v3';

export default function LayoutGrid() {
  return (
    //@ts-ignore
    <Grid
      h="200"
      templateColumns="1 1 1 1 1"
      templateRows="1 1"
      width="100%"
      gap={5}
      flex={1}
    >
      <GridItem colStart={0} colEnd={1} rowStart={0} rowEnd={2}>
        <Box bg="#4285f3" flex={1} justifyContent="center" alignItems="center">
          <Text>1</Text>
        </Box>
      </GridItem>
      <GridItem colStart={1} colEnd={3} rowStart={0} rowEnd={1}>
        <Box bg="#fbbd04" flex={1} justifyContent="center" alignItems="center">
          <Text>2</Text>
        </Box>
      </GridItem>
      <GridItem colStart={3} colEnd={5} rowStart={0} rowEnd={1}>
        <Box bg="#fbbd04" flex={1} justifyContent="center" alignItems="center">
          <Text>3</Text>
        </Box>
      </GridItem>
      <GridItem colStart={1} colEnd={5} rowStart={1} rowEnd={2}>
        <Box bg="#33a852" flex={1} justifyContent="center" alignItems="center">
          <Text>4</Text>
        </Box>
      </GridItem>
    </Grid>
  );
}
