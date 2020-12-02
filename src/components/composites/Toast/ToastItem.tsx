import React from 'react';
import { Box, Text } from '../../primitives';
import type { IToastProps } from './props';

const ToastItem = ({ title, offset, ...props }: IToastProps) => {
  return (
    <Box
      p={3}
      ml={offset?.x}
      mt={offset?.y}
      borderRadius={'full'}
      backgroundColor={'gray.200'}
      opacity={0.9}
      {...props}
    >
      <Text bold fontSize="md">
        {title}
      </Text>
    </Box>
  );
};

export default ToastItem;
