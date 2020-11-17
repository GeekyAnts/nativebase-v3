import React from 'react';
import { Grid, GridItem, Text } from '@native-base/v3';

export default function BasicGrid() {
  return (
    //@ts-ignore
    <Grid templateColumns="1 2 3 1 2 1">
      <GridItem>
        <Text>1</Text>
      </GridItem>
      <GridItem colSpan={2}>
        <Text>2</Text>
      </GridItem>
      <GridItem>
        <Text>3</Text>
      </GridItem>
      <GridItem>
        <Text>4</Text>
      </GridItem>
      <GridItem>
        <Text>5</Text>
      </GridItem>
      <GridItem>
        <Text>6</Text>
      </GridItem>
      <GridItem>
        <Text>7</Text>
      </GridItem>
    </Grid>
  );
}
