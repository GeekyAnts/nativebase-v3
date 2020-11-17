import { omitBy, isNil, pick, omit } from 'lodash';

export type Dict = Record<string, any>;

export function omitUndefined(obj: any) {
  return omitBy(obj, isNil);
}

export function extractInObject(parent: any, values: Array<string>) {
  return [
    omitUndefined(pick(parent, values)),
    omitUndefined(omit(parent, values)),
  ];
}

// export const breakpoints = Object.freeze(['base', 'sm', 'md', 'lg', 'xl']);

export function getClosestBreakpoint(
  values: Record<string, any>,
  point: number
) {
  let dimValues = Object.values(values);
  let dimKeys = Object.keys(values);
  let index = -1;
  for (let i = 0; i < dimValues.length; i++) {
    if (dimValues[i] === point) {
      index = i;
      break;
    } else if (dimValues[i] > point && i !== 0) {
      index = i - 1;
      break;
    }
  }
  return { index, key: index !== -1 ? dimKeys[index] : -1 };
}

export const inValidBreakpointProps = ['style'];
