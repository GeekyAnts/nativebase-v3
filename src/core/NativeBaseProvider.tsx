import React from 'react';
import { ThemeConsumer, ThemeContext, ThemeProvider } from 'styled-components';
import { theme as defaultTheme, ITheme } from './../theme';
import { ColorModeProviderProps, ColorModeProvider } from './../color-mode';
import { Overlay } from '../components/primitives';

export interface NativeBaseProviderProps {
  theme?: ITheme;
  colorModeManager?: ColorModeProviderProps['colorModeManager'];
  children?: React.ReactNode;
}

const NativeBaseProvider = (props: NativeBaseProviderProps) => {
  const { children, colorModeManager, theme = defaultTheme } = props;
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider
        colorModeManager={colorModeManager}
        options={theme.config}
      >
        <Overlay>{children}</Overlay>
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export {
  NativeBaseProvider,
  ThemeConsumer as NativeBaseConsumer,
  ThemeContext as NativeBaseContext,
};
