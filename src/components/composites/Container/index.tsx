import React from 'react';
import { Box } from 'native-base';
import { usePropsConfig } from '../../../theme';
import type { IContainerProps } from './props';

const Container = ({ children, centerContent, ...props }: IContainerProps) => {
  const newProps = usePropsConfig('Container', props);
  return (
    <Box alignItems={centerContent ? 'center' : 'flex-start'} {...newProps}>
      {children}
    </Box>
  );
};

export default Container;
export type { IContainerProps };
