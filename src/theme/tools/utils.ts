import { omitBy, isNil } from 'lodash';

export type Dict = Record<string, any>;

export function mode(light: any, dark: any) {
  return (props: Dict) => (props.colorMode === 'dark' ? dark : light);
}

export function omitUndefined(obj: any) {
  return omitBy(obj, isNil);
}
