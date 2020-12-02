import { useWindowDimensions } from 'react-native';
import { getClosestBreakpoint, breakpoints } from '../theme/tools';
import { theme } from '..';

export function useBreakpointValue(values: any) {
  let windowWidth = useWindowDimensions()?.width;
  let currentBreakpoint = getClosestBreakpoint(theme.breakpoints, windowWidth);
  return typeof values === 'object'
    ? findLastValidBreakpoint(values, currentBreakpoint)
    : values;
}

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
