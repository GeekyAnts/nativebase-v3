import React from 'react';
import { SVGIcon } from './SVGIcon';
import type { ICreateIconProps } from './props';
import { isEmpty } from 'lodash';
export function createIcon({ path, d, ...initialProps }: ICreateIconProps) {
  return (props: any) => {
    let children = path;
    if (d && (!path || isEmpty(path))) {
      children = <path fill="currentColor" d={d} />;
    }
    return <SVGIcon children={children} {...initialProps} {...props} />;
  };
}
