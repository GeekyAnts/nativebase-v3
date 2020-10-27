import { useContext } from 'react';
import { ThemeContext } from './../ThemeProvider';
import deepmerge from 'deepmerge';
import { get } from 'lodash';
import { themePropertyMap } from './../base';
import type { IThemeComponents } from './../components';
import { omitUndefined } from './utils';

export function useStyleConfig(
  component: IThemeComponents,
  props: any
): { style: any; newProps: any } {
  const theme = useContext(ThemeContext);
  const componentTheme = get(theme, `theme.components.${component}`);
  // Extracting styles from defaultProps
  let { style, newProps } = extractStyleFromProps(
    componentTheme.defaultProps,
    theme,
    componentTheme
  );
  // Extracting styles from base style
  for (let property in componentTheme.baseStyle) {
    newProps[property] = get(
      theme,
      `theme.${themePropertyMap[property]}.${componentTheme.baseStyle[property]}`,
      componentTheme.baseStyle[property]
    );
  }
  // Extracting styles from normal props
  let {
    style: extractedStyle,
    newProps: extractedProps,
  } = extractStyleFromProps(props, theme, componentTheme);
  style = { ...style, ...extractedStyle };
  newProps = { ...newProps, ...extractedProps };

  // Extracting styles from variant
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
  style = omitUndefined(style);
  newProps = omitUndefined(newProps);
  if (props.style) {
    return deepmerge(style, props.style);
  }
  return { style, newProps };
}

/*
 Extract styles from theme props and omit those from props
*/
function extractStyleFromProps(
  props: any,
  theme: any,
  componentTheme: any
): { style: any; newProps: any } {
  let style: any = {};
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
  return { style, newProps: omitUndefined(newProps) };
}
