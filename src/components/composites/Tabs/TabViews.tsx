import React from 'react';
import { Box } from '../../primitives';
import getIndexedChildren from '../../../utils/getIndexedChildren';
import type { ITabViewsProps } from './index';

const TabViews = ({ children, ...props }: ITabViewsProps) => {
  return <Box {...props}>{getIndexedChildren(children, 'TabView')}</Box>;
};

export default TabViews;
