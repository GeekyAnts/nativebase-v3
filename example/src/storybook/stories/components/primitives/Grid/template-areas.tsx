import React from 'react';
import { Box, Grid, GridItem } from '@native-base/v3';
import { Text } from 'react-native';
// `"c c t t t g "
// "s s t t t g g"
// "d k f f f g g"`
export default function LayoutGrid() {
  return (
    <Grid
      templateAreas={`"c t t g"
"d t t g"
"f f f g"`}
      gap={5}
      width="100%"
    >
      {/* <GridItem area="s">
        <Box justifyContent="center" alignItems="center">
          <Text>Hello </Text>
        </Box>
      </GridItem> */}
      {/* <GridItem area="space1">
        <Box
          bg="white"
          flex={1}
          justifyContent="center"
          alignItems="center"
        ></Box>
      </GridItem> */}
      {/* <GridItem area="space2">
        <Box
          bg="white"
          flex={1}
          justifyContent="center"
          alignItems="center"
        ></Box>
      </GridItem> */}

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

      {/* <GridItem area="j">
        <Box flex={1} bg="#fff" justifyContent="center" alignItems="center">
          <Text>j</Text>
        </Box>
      </GridItem> */}

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

      {/* <GridItem area="k">
        <Box justifyContent="center" alignItems="center">
          <Text>k</Text>
        </Box>
      </GridItem> */}
    </Grid>
  );
}
