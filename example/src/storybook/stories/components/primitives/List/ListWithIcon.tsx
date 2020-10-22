import React from 'react';
import { List, Heading, ListItem, Box, ListIcon } from 'native-base';

export default function () {
  return (
    <Box height="50%">
      <Heading size="4xl" color="indigo.5">
        List with Icons
      </Heading>
      <List mt={2} fontSize={32} spacing={4} color="red.2">
        <ListItem>
          <ListIcon
            name="check-circle-outline"
            color="green.4"
            type="MaterialIcons"
          />
          Server went up
        </ListItem>
        <ListItem>
          <ListIcon name="cancel" color="red.4" type="MaterialIcons" />
          Server went down
        </ListItem>
        <ListItem>
          <ListIcon name="equalizer" type="MaterialIcons" />
          Graphs and stats
        </ListItem>
        <ListItem>
          <ListIcon name="attach-file" color="gray.4" type="MaterialIcons" />
          Attachments
        </ListItem>
      </List>
    </Box>
  );
}
