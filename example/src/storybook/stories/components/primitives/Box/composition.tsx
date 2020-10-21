import React from 'react';
import { Box, Heading, Divider, Flex } from 'native-base';
export const Composite = () => {
  return (
    <Box width="100%" bg="blue.0" p={4} color="blue.7">
      <Heading size="xl">Title</Heading>
      <Divider mb={4} borderColor="teal.4" />
      This can be a paragraph of a Story about a wise fox.
      <Flex direction="row">
        <Box width="50%" bg="blue.0" p={4} color="blue.7">
          <Heading size="lg">Sub Title</Heading>
          <Divider mb={4} borderColor="teal.4" />
          This can be a paragraph of a Story about a wise fox.
        </Box>
        <Box width="50%" bg="blue.0" p={4} color="blue.7">
          <Heading size="lg">Sub Title</Heading>
          <Divider mb={4} borderColor="teal.4" />
          This can be a paragraph of a Story about a wise fox.
        </Box>
      </Flex>
    </Box>
  );
};
