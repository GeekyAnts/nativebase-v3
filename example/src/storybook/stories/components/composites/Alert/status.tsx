import React from 'react';
import {
  Stack,
  AlertDescription,
  Alert,
  AlertIcon,
  AlertCloseButton,
} from '@native-base/v3';

export default function () {
  return (
    <Stack space={3}>
      <Alert status="error">
        <AlertIcon />
        <AlertDescription>
          There was an error processing your request
        </AlertDescription>
        <AlertCloseButton />
      </Alert>

      <Alert status="success">
        <AlertIcon />
        <AlertDescription>
          Data uploaded to the server. Fire on!
        </AlertDescription>
        <AlertCloseButton />
      </Alert>

      <Alert status="warning">
        <AlertIcon />
        <AlertDescription>Seems your account is about expire</AlertDescription>
        <AlertCloseButton />
      </Alert>

      <Alert status="default">
        <AlertIcon />
        <AlertDescription>
          NativeBase is going live soon . Get ready!
        </AlertDescription>
        <AlertCloseButton />
      </Alert>
    </Stack>
  );
}
