import React from 'react';
import { Heading, IHeadingProps } from '../../primitives';

const AlertTitle = ({ style, ...props }: IHeadingProps) => {
  return <Heading mr="2" size="md" {...props} style={style} />;
};

export default AlertTitle;
