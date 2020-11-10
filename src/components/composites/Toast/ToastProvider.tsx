import React from 'react';
import { Box } from 'native-base';
import ToastItem from './ToastItem';
import { useToastManager } from './hooks';

const ToastProvider = () => {
  const [toasts] = useToastManager();
  const holderStyle: any = {
    top: {
      top: 0,
      right: 0,
      left: 0,
    },
    bottom: {
      bottom: 0,
      right: 0,
      left: 0,
    },
  };
  if (!toasts || !toasts.length) {
    return null;
  }
  let { position = 'bottom', ...toast } = toasts[0];
  return (
    <Box
      position="absolute"
      style={holderStyle[position]}
      zIndex={9999}
      justifyContent={
        position === 'center'
          ? 'center'
          : position === 'bottom'
          ? 'flex-end'
          : undefined
      }
    >
      <ToastItem {...toast} />
    </Box>
  );
};

export default ToastProvider;
