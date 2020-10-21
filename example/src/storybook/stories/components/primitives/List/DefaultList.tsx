import React from 'react';
import { List, Heading, ListItem, Box } from 'native-base';

export default function () {
  return (
    <Box height="50%">
      <Heading size="4xl" color="indigo.5">
        List with bullets
      </Heading>
      <List mt={2} fontSize={32} isStyled spacing={4} color="red.2">
        <ListItem>Inferno</ListItem>
        <ListItem>Mirage</ListItem>
        <ListItem>Dust 2</ListItem>
        <ListItem>Nuke</ListItem>
        <ListItem>Overpass</ListItem>
        <ListItem>Cobblestone</ListItem>
        <ListItem>Train</ListItem>
      </List>
    </Box>
  );
}
