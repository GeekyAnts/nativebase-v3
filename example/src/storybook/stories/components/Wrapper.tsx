import React from 'react';
import { View, NativeBaseProvider } from '@native-base/v3';

export default ({ children, theme }: any) => {
  return (
    <NativeBaseProvider theme={theme}>
      <View bg="gray.0" flex={1} justifyContent="center" alignItems="center">
        {children}
      </View>
    </NativeBaseProvider>
  );
};
