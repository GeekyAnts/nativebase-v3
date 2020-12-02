import React from 'react';
import { Box } from '../../primitives';
import type { ICenterProps } from './props';
import { usePropsConfig } from '../../../theme';
import type { View } from 'react-native';

const Center = ({ style, ...props }: ICenterProps, ref: any) => {
  let newProps = usePropsConfig('Center', props);
  return <Box ref={ref} {...newProps} style={style} />;
};

export default React.forwardRef<View, ICenterProps>(Center);
