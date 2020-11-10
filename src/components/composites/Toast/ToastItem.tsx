import React from 'react';
import { Box, Text } from 'native-base';
import type { IToastProps } from './props';

const ToastItem = ({ position, title, offset, ...props }: IToastProps) => {
  return (
    <Box
      p={3}
      ml={offset?.x}
      mt={offset?.y}
      borderRadius={'full'}
      backgroundColor={'gray.2'}
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
