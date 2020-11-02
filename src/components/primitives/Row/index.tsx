import React from 'react';
import Flex, { IFlexProps } from './../Flex';

const Row = (props: IFlexProps) => {
  return <Flex {...props} direction="row" />;
};

export default Row;
export { IFlexProps as IRowProps };
