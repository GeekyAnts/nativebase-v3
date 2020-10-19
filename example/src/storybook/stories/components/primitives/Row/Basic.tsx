import React from 'react';
import { Row, Box } from 'native-base';

export default function () {
  return (
    <Row width={400}>
      <Box h="100" flexGrow={1} bg="green.5" />
      <Box bg="blue.3" flexGrow={2} h="100" />
      <Box flexGrow={1} h="100" bg="tomato" />
    </Row>
  );
}
