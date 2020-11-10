import darkTheme from './darkTheme';
import base from './base';
import components from './components';
import { usePropsConfig, useTheme } from './hooks';
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
  usePropsConfig,
  useTheme,
  tools as themeTools,
};
