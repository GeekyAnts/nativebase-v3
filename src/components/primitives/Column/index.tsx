import React from 'react';
import Flex, { IFlexProps } from './../Flex';

const Column = (props: IFlexProps) => {
  return <Flex {...props} direction="column" />;
};

export default Column;
export { IFlexProps as IColumnProps };
