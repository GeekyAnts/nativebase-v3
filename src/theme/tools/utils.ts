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
