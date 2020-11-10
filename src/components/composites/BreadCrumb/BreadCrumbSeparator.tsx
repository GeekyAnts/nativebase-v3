import React from 'react';
import { isNil } from 'lodash';
import { Text } from '../../primitives';

export const BreadCrumbSeparator = (
  children: JSX.Element[] | JSX.Element | any,
  separator: string | JSX.Element | JSX.Element[] | any,
  props: any,
  spacing: number | undefined
) => {
  if (Array.isArray(children)) {
    if (children.length === 1) {
      return children;
    }
    const separatorElement = separator ? (
      typeof separator === 'string' ? (
        <Text mx={!isNil(spacing) ? spacing : 2}>{separator}</Text>
      ) : (
        React.cloneElement(separator, {
          mx: !isNil(spacing) ? spacing : 2,
        })
      )
    ) : (
      <Text mx={!isNil(spacing) ? spacing : 2}>{'/'}</Text>
    );
    let result: any = [];
    if (children && children.length > 1) {
      result = children.reduce(
        (r: any[], a: any) => r.concat(a, separatorElement),
        [separatorElement]
      );
    }
    result = result.slice(1, -1);

    return result.map((child: any) => {
      return React.cloneElement(child, props);
    });
  } else {
    return children;
  }
};
