import { get, isNil, mergeWith, cloneDeep } from 'lodash';
import { useWindowDimensions } from 'react-native';
import { useNativeBase } from './../../hooks';
import { themePropertyMap } from './../base';
import {
  omitUndefined,
  getClosestBreakpoint,
  inValidBreakpointProps,
  breakpoints,
} from './../tools/';

export function usePropsConfig(component: string, props: any) {
  const { theme, ...colorModeProps } = useNativeBase();
  let windowWidth = useWindowDimensions()?.width;
  let currentBreakpoint = getClosestBreakpoint(theme.breakpoints, windowWidth);
  if (!props) {
    props = {};
  }
  const componentTheme = get(theme, `components.${component}`, {});
  props = omitUndefined(props);
  // Extracting props from defaultProps
  let newProps = extractProps(
    componentTheme.defaultProps,
    theme,
    componentTheme,
    currentBreakpoint
  );
  // Extracting props from base style
  let componentBaseStyle =
    typeof componentTheme.baseStyle !== 'function'
      ? componentTheme.baseStyle
      : componentTheme.baseStyle({
          theme,
          ...newProps,
          ...props,
          ...colorModeProps,
        });
  newProps = mergeWith(
    newProps,
    componentBaseStyle,
    // @ts-ignore
    (objValue, srcValue, key) => {
      if (!isNil(objValue)) {
        delete newProps[key];
      }
    }
  );

  // Extracting props from variant
  if (
    componentTheme.variants &&
    newProps.variant &&
    componentTheme.variants[newProps.variant]
  ) {
    const colorScheme =
      newProps.colorScheme || componentTheme.defaultProps.colorScheme;
    let variantProps = componentTheme.variants[newProps.variant]({
      ...newProps,
      colorScheme,
      theme,
      ...colorModeProps,
    });
    // added this to handle order of props
    newProps = mergeWith(
      newProps,
      variantProps,
      // @ts-ignore
      (objValue, srcValue, key) => {
        if (!isNil(objValue)) {
          delete newProps[key];
        }
      }
    );
    delete newProps.variant;
    delete newProps.colorScheme;
  }

  // Extracting props from normal props
  let extractedProps = extractProps(
    props,
    theme,
    componentTheme,
    currentBreakpoint
  );
  // added this to handle order of props
  // @ts-ignore
  newProps = mergeWith(newProps, extractedProps, (objValue, srcValue, key) => {
    if (!isNil(objValue)) {
      delete newProps[key];
    }
  });
  newProps = omitUndefined(newProps);
  return newProps;
}

/*
 Extract props from theme props and omit those from props
*/
function extractProps(
  props: any,
  theme: any,
  componentTheme: any,
  currentBreakpoint: number
) {
  let newProps: any = {};
  for (let property in props) {
    // If the property exists in theme map then get its value
    if (themePropertyMap[property]) {
      let propValues = get(
        componentTheme,
        `${themePropertyMap[property]}.${props[property]}`
      );
      if (typeof propValues === 'string' || typeof propValues === 'number') {
        newProps[property] = propValues;
      } else if (!isNil(propValues)) {
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
        newProps[property] = resolveValue(
          props[property],
          currentBreakpoint,
          property
        );
      }
    } else {
      newProps[property] = resolveValue(
        props[property],
        currentBreakpoint,
        property
      );
    }
  }
  return cloneDeep(newProps);
}

// Checks the property and resolves it if it has breakpoints
const resolveValue = (
  values: any,
  currentBreakpoint: number,
  property: any
) => {
  if (
    inValidBreakpointProps.indexOf(property) !== -1 ||
    (inValidBreakpointProps.indexOf(property) === -1 &&
      typeof values !== 'object')
  ) {
    return values;
  } else {
    return findLastValidBreakpoint(values, currentBreakpoint);
  }
};

const findLastValidBreakpoint = (values: any, currentBreakpoint: number) => {
  let valArray = Array.isArray(values)
    ? values
    : breakpoints.map((bPoint: string) => values[bPoint]);
  return (
    valArray[currentBreakpoint] ??
    valArray
      .slice(0, currentBreakpoint + 1)
      .filter((v: any) => v ?? null)
      .pop()
  );
};
