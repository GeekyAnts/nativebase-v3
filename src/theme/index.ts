import darkTheme from './darkTheme';
import base from './base';
import components from './components';
import * as tools from './tools';
const theme = {
  ...base,
  components,
};

export { darkTheme, theme, tools as themeTools };
export * from './hooks';
