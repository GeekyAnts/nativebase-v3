import React from 'react';
import { View, NativeBaseProvider, Overlay } from '@native-base/v3';

export default ({ children, theme }: any) => {
  return (
    <NativeBaseProvider theme={theme}>
      <Overlay>
        <View bg="gray.50" flex={1} justifyContent="center" alignItems="center">
          {children}
        </View>
      </Overlay>
    </NativeBaseProvider>
  );
};
