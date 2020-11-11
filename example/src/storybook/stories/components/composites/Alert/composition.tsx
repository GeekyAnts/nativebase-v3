import React from 'react';
import {
  Alert,
  AlertDescription,
  AlertTitle,
  AlertIcon,
  AlertCloseButton,
  Box,
} from 'native-base';

export default function () {
  return (
    <Box mx={3}>
      <Alert
        status="success"
        variant="subtle"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="200px"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1}>
          Application submitted!
        </AlertTitle>
        <AlertDescription>
          Thanks for submitting your application. Our team will get back to you
          soon.
        </AlertDescription>

        <AlertCloseButton />
      </Alert>
    </Box>
  );
}
