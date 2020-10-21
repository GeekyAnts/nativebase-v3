import darkTheme from './darkTheme';
// import theme from './theme';
import base from './base';
const theme = { ...base };

import { ThemeConsumer, ThemeContext, ThemeProvider } from 'styled-components';

export { darkTheme, theme, ThemeProvider, ThemeConsumer, ThemeContext };
