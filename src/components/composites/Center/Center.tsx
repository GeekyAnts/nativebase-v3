import React from 'react';
import { Box } from '../../primitives';
import type { ICenterProps } from './props';
import { usePropsConfig } from '../../../theme';

const Center = ({ style, ...props }: ICenterProps) => {
  let newProps = usePropsConfig('Center', props);
  return <Box {...newProps} style={style} />;
};

export default Center;
