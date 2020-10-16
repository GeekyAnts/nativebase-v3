import React from 'react';
import {
  View,
  Alert,
  AlertDescription,
  AlertTitle,
  AlertIcon,
  AlertCloseButton,
} from 'native-base';
export default function () {
  return (
    <View display="flex" justifyContent="space-between" alignItems="center">
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>Error Alert</AlertTitle>
        <AlertDescription>description goes here </AlertDescription>
        <AlertCloseButton />
      </Alert>
    </View>
  );
}
