import React from 'react';
import Center from './Center';
import type { ICircleProps } from './props';

const Circle = ({ style, size, ...props }: ICircleProps) => {
  return (
    <Center
      rounded="100"
      height={typeof size === 'number' ? size : 0}
      width={typeof size === 'number' ? size : 0}
      size={size}
      {...props}
      style={style}
    />
  );
};

export default Circle;
