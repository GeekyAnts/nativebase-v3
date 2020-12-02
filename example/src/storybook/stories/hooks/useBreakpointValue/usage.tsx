import React from 'react';
import { Box, useBreakpointValue } from '@native-base/v3';
export default () => {
  const color = useBreakpointValue({ base: 'red.200', md: 'blue.200' });
  return (
    <Box bg={color} w={['100px', '400px', '560px']}>
      This is a box
    </Box>
  );
};
