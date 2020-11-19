import React from 'react';
import { Box, Grid, GridItem, Text } from '@native-base/v3';
// "c t t t t g g"
// "s t t t t g g"
// "d k f f f g g"
export default function LayoutGrid() {
  return (
    <Grid
      width="100%"
      templateAreas={`"c c t t t g g"
"s s t t t g g"
"d k f f f g g"`}
      gap={2}
    >
      <GridItem area="s">
        <Box justifyContent="center" alignItems="center">
          <Text>s</Text>
        </Box>
      </GridItem>
      <GridItem area="c">
        <Box justifyContent="center" alignItems="center">
          <Text>c</Text>
        </Box>
      </GridItem>
      <GridItem area="d">
        <Box justifyContent="center" alignItems="center">
          <Text>d</Text>
        </Box>
      </GridItem>

      <GridItem area="g">
        <Box flex={1} justifyContent="center" alignItems="center">
          <Text>g</Text>
        </Box>
      </GridItem>
      <GridItem area="t">
        <Box flex={1} justifyContent="center" alignItems="center">
          <Text>t</Text>
        </Box>
      </GridItem>

      <GridItem area="f">
        <Box justifyContent="center" alignItems="center">
          <Text>f</Text>
        </Box>
      </GridItem>

      <GridItem area="k">
        <Box justifyContent="center" alignItems="center">
          <Text>k</Text>
        </Box>
      </GridItem>
    </Grid>
  );
}
