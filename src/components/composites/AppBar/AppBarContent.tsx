import type { IBoxProps } from 'lib/typescript/src';
import React from 'react';
import { Box } from '../../primitives';

export type IAppBarContentProps = IBoxProps;

const AppBarContent = (props: IAppBarContentProps) => {
  return <Box flex={1} alignItems="center" flexDirection="row" {...props} />;
};

export default AppBarContent;
