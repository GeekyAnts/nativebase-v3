import React from 'react';
import { ScaleFade, Button, Box } from 'native-base';
export default function () {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(!isOpen)}>
        Click Me to {isOpen ? 'hide' : 'show'}
      </Button>
      <ScaleFade in={isOpen}>
        <Box p="40px" color="white" mt="4" bg="teal.5" rounded="md">
          ScaleFade
        </Box>
      </ScaleFade>
    </>
  );
}
