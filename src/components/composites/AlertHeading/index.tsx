import React from 'react';
import { Heading, IHeadingProps } from '../../primitives';

const AlertHeading = ({ style, ...props }: IHeadingProps) => {
  return <Heading ml="1" {...props} style={style} />;
};

export default AlertHeading;
