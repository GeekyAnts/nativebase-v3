import React from 'react';
import {
  Button,
  Alert,
  AlertIcon,
  AlertDescription,
  useSnackbar,
  VStack,
} from '@native-base/v3';
export default function () {
  const { setSnackbar } = useSnackbar();
  const template = (
    <Alert status="success">
      <AlertIcon />
      <AlertDescription>Welldone, we are proud of you.</AlertDescription>
    </Alert>
  );
  return (
    <VStack space={3}>
      <Button onPress={() => setSnackbar(template)}>
        Get Default Snackbar
      </Button>
      <Button
        onPress={() =>
          setSnackbar(template, {
            enableOverlay: true,
            placement: 'top',
          })
        }
      >
        Get Snackbar With Overlay
      </Button>
    </VStack>
  );
}
