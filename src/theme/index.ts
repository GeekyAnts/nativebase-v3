import darkTheme from './darkTheme';
import base from './base';
import components from './components';
import * as tools from './tools';
const theme = {
  ...base,
  components,
};

export type ITheme = typeof theme;
export { theme, darkTheme, tools as themeTools };
export * from './hooks';
