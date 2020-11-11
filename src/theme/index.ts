import darkTheme from './darkTheme';
import base from './base';
import components from './components';
import * as tools from './tools';
const theme = {
  ...base,
  components,
};

import { ThemeConsumer, ThemeContext, ThemeProvider } from 'styled-components';

export {
  darkTheme,
  theme,
  ThemeProvider as NativeBaseProvider,
  ThemeConsumer as NativeBaseConsumer,
  ThemeContext as NativeBaseContext,
  tools as themeTools,
};
export * from './hooks';
