import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';
import deepmerge from 'deepmerge';
import { get } from 'lodash';

type componentsType = 'Heading';

export function useStyleConfig(component: componentsType, props: any) {
  const theme = useContext(ThemeContext);
  const componentTheme = get(theme, `theme.components.${component}`);
  let baseStyle: any = {};
  for (let property in componentTheme.baseStyle) {
    baseStyle[property] = get(
      theme,
      `theme.${property}.${componentTheme.baseStyle.property}`
    );
  }

  return deepmerge(baseStyle, props.style);
}
