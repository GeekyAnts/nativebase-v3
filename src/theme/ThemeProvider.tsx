import React from 'react';
import deepmerge from 'deepmerge';
import darkTheme from './darkTheme';
import { theme } from './';

export const ThemeContext = React.createContext({
  theme,
});

export default class ThemeProvider extends React.Component {
  defaultTheme: any;
  state: any;
  constructor(props: any) {
    super(props);
    const defaultColors = props.useDark ? darkTheme : theme;
    this.defaultTheme = deepmerge(
      {
        colors: defaultColors,
      },
      props.theme
    );
    this.state = {
      theme: this.defaultTheme,
      useDark: props.useDark,
    };
  }

  static getDerivedStateFromProps(props: any, state: any): any {
    const { useDark } = props;
    if (useDark !== state.useDark) {
      const defaultColors = useDark ? darkTheme : theme;
      return {
        theme: deepmerge(state.theme, {
          colors: defaultColors,
        }),
        useDark,
      };
    }
    return null;
  }
  updateTheme = (updates: any) => {
    this.setState(({ newTheme }: any) => ({
      theme: deepmerge(newTheme, updates),
    }));
  };

  replaceTheme = (newTheme: any) => {
    this.setState(() => ({
      theme: deepmerge(this.defaultTheme, newTheme),
    }));
  };

  getTheme = () => this.state.theme;

  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          //@ts-ignore
          updateTheme: this.updateTheme,
          replaceTheme: this.replaceTheme,
        }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export const ThemeConsumer = ThemeContext.Consumer;
