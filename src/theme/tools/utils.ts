import { omitBy, isNil } from 'lodash';

export type Dict = Record<string, any>;

export function omitUndefined(obj: any) {
  return omitBy(obj, isNil);
}
