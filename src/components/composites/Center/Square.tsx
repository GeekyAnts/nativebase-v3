import React from 'react';
import Center from './Center';
import type { ISquareProps } from './props';

const Square = ({ style, size, ...props }: ISquareProps) => {
  return (
    <Center
      height={typeof size === 'number' ? size : 0}
      width={typeof size === 'number' ? size : 0}
      size={size}
      {...props}
      style={style}
    />
  );
};

export default Square;
