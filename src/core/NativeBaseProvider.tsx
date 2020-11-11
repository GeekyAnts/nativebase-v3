import React from 'react';
import { ThemeConsumer, ThemeContext, ThemeProvider } from 'styled-components';
import { theme as defaultTheme } from './../theme';

const NativeBaseProvider = (props: any) => {
  return <ThemeProvider {...props} theme={props.theme || defaultTheme} />;
};

export {
  NativeBaseProvider,
  ThemeConsumer as NativeBaseConsumer,
  ThemeContext as NativeBaseContext,
};
