import React from 'react';
import { Box, Text } from 'native-base';
import type { IToastProps } from './props';

const ToastItem = ({ position, title, ...props }: IToastProps) => {
  return (
    <Box
      width="100%"
      flexDirection={position === 'top' ? 'column' : 'column-reverse'}
      justifyContent={position === 'top' ? 'flex-start' : 'flex-end'}
      alignItems={'center'}
    >
      <Box p={3} borderRadius={'full'} backgroundColor={'gray.2'} {...props}>
        <Text bold fontSize="md">
          {title}
        </Text>
      </Box>
    </Box>
  );
};

export default ToastItem;
