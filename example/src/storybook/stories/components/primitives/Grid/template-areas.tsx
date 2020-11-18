import React from 'react';
import { Box, Grid, GridItem, Text } from '@native-base/v3';

export default function LayoutGrid() {
  return (
    <Grid
      templateAreas={`
      "s c c d g"
      "s t t t f"
      "k k k k k"
      `}
      gap={2}
      flex={1}
      width="100%"
    >
      <GridItem area="s">
        <Box bg="#fbbd04" flex={1} justifyContent="center" alignItems="center">
          <Text>1</Text>
        </Box>
      </GridItem>
      <GridItem area="c">
        <Box bg="#fbbd04" flex={1} justifyContent="center" alignItems="center">
          <Text>2</Text>
        </Box>
      </GridItem>
      <GridItem area="d">
        <Box bg="#fbbd04" flex={1} justifyContent="center" alignItems="center">
          <Text>3</Text>
        </Box>
      </GridItem>

      <GridItem area="g">
        <Box bg="#33a852" flex={1} justifyContent="center" alignItems="center">
          <Text>4</Text>
        </Box>
      </GridItem>
      <GridItem area="t">
        <Box bg="#33a852" flex={1} justifyContent="center" alignItems="center">
          <Text>5</Text>
        </Box>
      </GridItem>

      <GridItem area="f">
        <Box bg="#33a852" flex={1} justifyContent="center" alignItems="center">
          <Text>6</Text>
        </Box>
      </GridItem>

      <GridItem area="k">
        <Box bg="#ea4435" flex={1} justifyContent="center" alignItems="center">
          <Text>7</Text>
        </Box>
      </GridItem>
    </Grid>
  );
}
