import React from 'react';
import { Heading, IHeadingProps } from '../../primitives';

const AlertHeading = ({ style, ...props }: IHeadingProps) => {
  return <Heading mr="2" size="md" {...props} style={style} />;
};

export default AlertHeading;
