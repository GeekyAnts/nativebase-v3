import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';
import deepmerge from 'deepmerge';
import { get, omitBy, isNil } from 'lodash';
import { themePropertyMap } from './base';
import type { IThemeComponents } from './components';

export type Dict = Record<string, any>;

export function mode(light: any, dark: any) {
  return (props: Dict) => (props.colorMode === 'dark' ? dark : light);
}

export const isValidHex = (color: string): boolean => {
  return new RegExp(/^#[0-9A-F]{6}$/i).test(color);
};
export const getColor = (theme: Dict, color: string, fallback?: string) => {
  const hex = get(theme, `colors.${color}`, color);
  return isValidHex(hex) ? hex : fallback;
};

export function useStyleConfig(
  component: IThemeComponents,
  props: any
): { style: any; newProps: any } {
  const theme = useContext(ThemeContext);
  const componentTheme = get(theme, `theme.components.${component}`);
  let { style, newProps } = extractStyleFromProps(props, theme, componentTheme);
  for (let property in componentTheme.baseStyle) {
    style[property] = get(
      theme,
      `theme.${themePropertyMap[property]}.${componentTheme.baseStyle[property]}`
    );
  }

  style = omitUndefined(style);
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
        style[nestedProp] = get(
          theme,
          `theme.${themePropertyMap[nestedProp]}.${propValues[nestedProp]}`
        );
      }
    } else {
      newProps[property] = props[property];
    }
  }
  return { style, newProps: omitUndefined(newProps) };
}
function omitUndefined(obj: any) {
  return omitBy(obj, isNil);
}
