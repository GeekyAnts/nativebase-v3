import { useWindowDimensions } from 'react-native';
import { isNil } from 'lodash';

type QueryKeys =
  | 'maxWidth'
  | 'minWidth'
  | 'maxHeight'
  | 'minHeight'
  | 'orientation';

type SubQuery = {
  [queryKey in QueryKeys]?: number | string;
};
type Query = Array<SubQuery>;

export function useMediaQuery(query: SubQuery | Query) {
  if (Array.isArray(query)) {
    return query.map((subQuery: SubQuery) => executeQuery(subQuery));
  } else {
    return [executeQuery(query)];
  }
}

function executeQuery(query: SubQuery) {
  let key = Object.keys(query)[0];
  let val = Object.values(query)[0];
  let retval;
  switch (key) {
    case 'maxWidth':
      retval = !isNil(val) ? useWindowDimensions()?.width <= val : undefined;
      break;
    case 'minWidth':
      retval = !isNil(val) ? useWindowDimensions()?.width >= val : undefined;
      break;
    case 'maxHeight':
      retval = !isNil(val) ? useWindowDimensions()?.height <= val : undefined;
      break;
    case 'minHeight':
      retval = !isNil(val) ? useWindowDimensions()?.height >= val : undefined;
      break;
    case 'orientation':
      if (!isNil(val)) {
        if (useWindowDimensions()?.width > useWindowDimensions()?.height) {
          retval = val === 'landscape';
        } else {
          retval = val === 'portrait';
        }
      }
      break;
    default:
      break;
  }
  return retval;
}
