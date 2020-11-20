import React from 'react';
import { StyleSheet, View } from 'react-native';
import ToastItem from './ToastItem';
import { useToastManager } from './hooks';

const ToastProvider = () => {
  const [toasts] = useToastManager();
  if (!toasts || !toasts.length) {
    return null;
  }
  let { position = 'bottom', ...toast } = toasts[0];
  let providerStyle = StyleSheet.create({
    provider: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      zIndex: 99999,
      alignItems: 'center',
      justifyContent:
        position === 'center'
          ? 'center'
          : position === 'bottom'
          ? 'flex-end'
          : undefined,
    },
  });
  return (
    // Need to use React native view to apply pointerEvents none
    <View
      nativeID="toast-provider"
      style={providerStyle.provider}
      pointerEvents="none"
    >
      <ToastItem {...toast} />
    </View>
  );
};

export default ToastProvider;
