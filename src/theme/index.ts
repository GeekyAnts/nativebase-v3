import darkTheme from './darkTheme';
// import theme from './theme';
import base from './base';
import components from './components';
import { usePropsConfig } from './tools/usePropsConfig';
const theme = {
  ...base,
  components,
};

import { ThemeConsumer, ThemeContext, ThemeProvider } from 'styled-components';

export {
  darkTheme,
  theme,
  ThemeProvider,
  ThemeConsumer,
  ThemeContext,
  usePropsConfig,
};
