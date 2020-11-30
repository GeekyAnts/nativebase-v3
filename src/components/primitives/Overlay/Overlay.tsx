import React from 'react';
import { StyleSheet, View } from 'react-native';
import type { IOverlayProps } from './index';

export const OverlayContext = React.createContext({});

const Overlay = ({
  children,
  disableOverlay,
  position,
  defaultBackgroundColor,
  ...props
}: IOverlayProps) => {
  const [overlayItem, setOverlayItem] = React.useState(null);
  const [config, setConfig] = React.useState({
    disableOverlay: disableOverlay,
    position: position || 'center',
    backgroundColor: defaultBackgroundColor || '#161616cc',
  });
  let providerStyle = StyleSheet.create({
    provider: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      zIndex: 99999,
      alignItems: 'center',
      backgroundColor: config.disableOverlay
        ? 'transparent'
        : config.backgroundColor,
      justifyContent:
        config.position === 'top'
          ? 'flex-start'
          : config.position === 'bottom'
          ? 'flex-end'
          : 'center',
    },
  });

  return (
    // Need to use React native view to apply pointerEvents none
    <OverlayContext.Provider
      value={{ setOverlayItem, defaultConfig: config, setConfig }}
    >
      {children}
      {overlayItem && (
        <View
          nativeID="toast-provider"
          style={providerStyle.provider}
          pointerEvents={config.disableOverlay ? 'box-none' : 'auto'}
          {...props}
        >
          {overlayItem}
        </View>
      )}
    </OverlayContext.Provider>
  );
};

export default Overlay;
