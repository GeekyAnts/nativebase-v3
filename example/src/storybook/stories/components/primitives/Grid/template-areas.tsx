import React from 'react';
import { Box, Grid, GridItem, Text } from '@native-base/v3';
// `"c c t t t g "
// "s s t t t g g"
// "d k f f f g g"`
export default function LayoutGrid() {
  return (
    <Grid
      templateAreas={`"c c t t g g"
"d s t t g g"
"d space1 f space2 g g"
"j j j k g g"`}
      gap={2}
      width="100%"
    >
      <GridItem area="space1">
        <Box justifyContent="center" alignItems="center"></Box>
      </GridItem>
      <GridItem area="space2">
        <Box justifyContent="center" alignItems="center"></Box>
      </GridItem>

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

      <GridItem area="j">
        <Box flex={1} bg="#fff" justifyContent="center" alignItems="center">
          <Text>j</Text>
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
