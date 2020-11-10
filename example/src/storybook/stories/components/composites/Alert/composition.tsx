import React from 'react';
import {
  Alert,
  AlertDescription,
  AlertTitle,
  AlertIcon,
} from '@native-base/v3';

export default function () {
  return (
    <Alert
      status="success"
      variant="subtle"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      // textAlign="center"
      height="200px"
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1}>
        Application submitted!
      </AlertTitle>
      <AlertDescription maxWidth="sm">
        Thanks for submitting your application. Our team will get back to you
        soon.
      </AlertDescription>
    </Alert>
  );
}
