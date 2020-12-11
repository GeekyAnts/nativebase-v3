import React from 'react';
import {
  View,
  NativeBaseProvider,
  Switch,
  useColorMode,
  useColorModeValue,
} from '@native-base/v3';

function MyWrapper({ children }: any) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <View
      flex={1}
      height="100%"
      width="100%"
      justifyContent="center"
      alignItems="center"
      bg={useColorModeValue(`gray.50`, `dark.100`)}
    >
      <Switch
        onToggle={toggleColorMode}
        isChecked={colorMode === 'dark'}
        style={{ position: 'absolute', top: 10, right: 10 }}
      />
      {children}
    </View>
  );
}

export default ({ children, theme }: any) => {
  return (
    <NativeBaseProvider theme={theme}>
      <MyWrapper>{children}</MyWrapper>
    </NativeBaseProvider>
  );
};
