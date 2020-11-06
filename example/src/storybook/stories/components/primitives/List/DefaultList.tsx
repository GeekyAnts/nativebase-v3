import React from 'react';
import { Li, Heading, Ul, Ol, Box } from 'native-base';

export default function () {
  return (
    <Box height="50%">
      <Heading fontSize={32} color="indigo.5">
        Unordered List
      </Heading>
      <Ol my={2} fontSize={24} spacing={4} color="red.2">
        <Li>Inferno</Li>
        <Li>Mirage</Li>
        <Li>Dust 2</Li>
        <Li>Nuke</Li>
      </Ol>
      <Heading fontSize={32} color="indigo.5">
        Ordered List
      </Heading>
      <Ul mt={2} fontSize={24} spacing={4} color="red.2">
        <Li>Inferno</Li>
        <Li>Mirage</Li>
        <Li>Dust 2</Li>
        <Li>Nuke</Li>
      </Ul>
    </Box>
  );
}
