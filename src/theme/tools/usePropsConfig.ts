import { useContext } from 'react';
import { ThemeContext } from './../ThemeProvider';
import { get, isNil, mergeWith } from 'lodash';
import { themePropertyMap } from './../base';
import type { IThemeComponents } from './../components';
import { omitUndefined } from './utils';

export function usePropsConfig(component: IThemeComponents, props: any) {
  const theme = useContext(ThemeContext).theme;
  const componentTheme = get(theme, `components.${component}`);
  props = omitUndefined(props);
  // Extracting props from defaultProps
  let newProps = extractProps(
    componentTheme.defaultProps,
    theme,
    componentTheme
  );
  // Extracting props from base style
  let componentBaseStyle =
    typeof componentTheme.baseStyle !== 'function'
      ? componentTheme.baseStyle
      : componentTheme.baseStyle({ theme, ...newProps, ...props });
  for (let property in componentBaseStyle) {
    newProps[property] = get(
      theme,
      `${themePropertyMap[property]}.${componentTheme.baseStyle[property]}`,
      componentTheme.baseStyle[property]
    );
    if (isNil(newProps[property])) {
      newProps[property] = componentBaseStyle[property];
    }
  }

  // Extracting props from normal props
  let extractedProps = extractProps(props, theme, componentTheme);
  // added this to handle order of props
  // @ts-ignore
  newProps = mergeWith(newProps, extractedProps, (objValue, srcValue, key) => {
    if (!isNil(objValue)) {
      delete newProps[key];
    }
  });
  // Extracting props from variant
  if (
    componentTheme.variants &&
    newProps.variant &&
    componentTheme.variants[newProps.variant]
  ) {
    const colorScheme =
      newProps.colorScheme || componentTheme.defaultProps.colorScheme;
    let variantProps = componentTheme.variants[newProps.variant]({
      colorScheme,
      theme,
    });

    newProps = { ...newProps, ...variantProps };
    delete newProps.variant;
    delete newProps.colorScheme;
  }
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
      if (!isNil(propValues)) {
        for (let nestedProp in propValues) {
          newProps[nestedProp] = get(
            theme,
            `${themePropertyMap[nestedProp]}.${propValues[nestedProp]}`,
            propValues[nestedProp]
          );
        }
      } else if (property === 'shadow') {
        let shadowProps = get(
          theme,
          `${themePropertyMap[property]}.${props[property]}`
        );
        if (!isNil(shadowProps)) {
          newProps = { ...newProps, ...shadowProps };
        }
      } else {
        newProps[property] = props[property];
      }
    } else {
      newProps[property] = props[property];
    }
  }
  return newProps;
}
