import { useContext } from 'react';
import { ThemeContext } from './../ThemeProvider';
import { get } from 'lodash';
import { themePropertyMap } from './../base';
import type { IThemeComponents } from './../components';
import { omitUndefined } from './utils';

export function usePropsConfig(component: IThemeComponents, props: any) {
  const theme = useContext(ThemeContext);
  const componentTheme = get(theme, `theme.components.${component}`);
  // Extracting props from defaultProps

  let newProps = extractProps(
    componentTheme.defaultProps,
    theme,
    componentTheme
  );
  // Extracting props from base style
  for (let property in componentTheme.baseStyle) {
    newProps[property] = get(
      theme,
      `theme.${themePropertyMap[property]}.${componentTheme.baseStyle[property]}`,
      componentTheme.baseStyle[property]
    );
  }
  // Extracting props from normal props
  let extractedProps = extractProps(props, theme, componentTheme);
  newProps = { ...newProps, ...extractedProps };
  // Extracting props from variant
  if (
    componentTheme.variants &&
    newProps.variant &&
    componentTheme.variants[newProps.variant]
  ) {
    const colorScheme =
      newProps.colorScheme || componentTheme.defaultProps.colorScheme;
    let extractedProps = componentTheme.variants[newProps.variant]({
      colorScheme,
      theme: theme.theme,
    });

    newProps = { ...newProps, ...extractedProps };
    delete newProps.variant;
    delete newProps.colorScheme;
  }
  // style = omitUndefined(style);
  newProps = omitUndefined(newProps);
  return newProps;
}

/*
 Extract props from theme props and omit those from props
*/
function extractProps(props: any, theme: any, componentTheme: any) {
  let newProps: any = {};
  for (let property in props) {
    // If the property exists in theme map then get its value
    if (themePropertyMap[property]) {
      let propValues = get(
        componentTheme,
        `${themePropertyMap[property]}.${props[property]}`
      );
      for (let nestedProp in propValues) {
        newProps[nestedProp] = get(
          theme,
          `theme.${themePropertyMap[nestedProp]}.${propValues[nestedProp]}`,
          propValues[nestedProp]
        );
      }
    } else {
      newProps[property] = props[property];
    }
  }
  return newProps;
}
