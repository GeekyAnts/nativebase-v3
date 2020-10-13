import React from 'react';
import {
  Alert,
  Stack,
  AlertDescription,
  AlertHeading,
  AlertIcon,
  AlertCloseButton,
} from 'native-base';

export default function () {
  return (
    <Stack space={4}>
      <Alert bg="blue.4" status="error">
        <AlertHeading>Error Alert</AlertHeading>
        <AlertDescription>description goes here </AlertDescription>
        <AlertCloseButton />
      </Alert>
      <Alert status="warning">
        <AlertIcon />
        <AlertHeading>Alert with Icon</AlertHeading>
        <AlertDescription>description goes here </AlertDescription>
        <AlertCloseButton />
      </Alert>
      <Alert status="error">
        <AlertIcon />
        <AlertHeading>Alert with Icon</AlertHeading>
        <AlertDescription>description goes here </AlertDescription>
        <AlertCloseButton />
      </Alert>
      <Alert status="success">
        <AlertIcon />
        <AlertHeading>Alert with Icon</AlertHeading>
        <AlertDescription>description goes here </AlertDescription>
        <AlertCloseButton />
      </Alert>
      <Alert variant="solid" status="success">
        <AlertIcon />
        <AlertHeading>Alert Solid Variant</AlertHeading>
        <AlertCloseButton />
      </Alert>
      <Alert variant="left-accent" status="success">
        <AlertIcon />
        <AlertHeading>Alert Left Accent Variant</AlertHeading>
        <AlertCloseButton />
      </Alert>
      <Alert variant="top-accent" status="success">
        <AlertIcon />
        <AlertHeading>Alert Top Accent Variant</AlertHeading>
        <AlertCloseButton />
      </Alert>
      <Alert status="success">
        <AlertIcon />
        <AlertHeading>Alert Default/Subtle Variant</AlertHeading>
        <AlertCloseButton />
      </Alert>
    </Stack>
  );
}
