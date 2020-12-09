import React from 'react';
import { useFadeAnimation } from '../../composites';
import { Animated, StyleSheet } from 'react-native';
import type { IOverlayProps } from './index';

export const OverlayContext = React.createContext({});

const Overlay = ({
  children,
  disableOverlay,
  position,
  animationDuration,
  defaultBackgroundColor,
}: IOverlayProps) => {
  const [overlayItem, setOverlayItem] = React.useState(null);
  const [config, setConfig] = React.useState({
    disableOverlay: disableOverlay,
    position: position || 'center',
    backgroundColor: defaultBackgroundColor || '#161616cc',
    animationDuration: animationDuration || 500,
  });

  const { fadeValue, fadeIn, fadeOut } = useFadeAnimation(animationDuration);
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

  const pointerEventsSetter = () => {
    if (overlayItem) {
      return config.disableOverlay ? 'box-none' : 'auto';
    } else {
      return 'none';
    }
  };

  overlayItem ? fadeIn() : fadeOut();
  return (
    // Need to use React native view to apply pointerEvents none
    <OverlayContext.Provider
      value={{ setOverlayItem, defaultConfig: config, setConfig }}
    >
      {children}
      <Animated.View
        nativeID="toast-provider"
        style={[providerStyle.provider, { opacity: fadeValue }]}
        pointerEvents={pointerEventsSetter()}
      >
        {overlayItem}
      </Animated.View>
    </OverlayContext.Provider>
  );
};

export default Overlay;
