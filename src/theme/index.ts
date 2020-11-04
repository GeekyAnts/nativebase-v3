import darkTheme from './darkTheme';
import base from './base';
import components from './components';
import { usePropsConfig } from './tools/usePropsConfig';
import * as tools from './tools';
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
  tools as themeTools,
};
