import React from 'react';
import { useOverlay } from '../../primitives';
import { Snackbar, IsetSnackbar, IuseSnackbarProps } from './index';

export const useSnackbar: IuseSnackbarProps = () => {
  const { closeOverlay, setOverlay } = useOverlay();
  const defaultConfig = {
    enableOverlay: false,
    duration: 5000,
  };

  const setSnackbar: IsetSnackbar = (component, config) => {
    config = {
      ...defaultConfig,
      ...config,
    };
    const { duration = 5000, enableOverlay, ...rest } = config;
    setOverlay(
      <Snackbar duration={duration} {...rest}>
        {component}
      </Snackbar>,
      {
        disableOverlay: !enableOverlay,
      }
    );
    setTimeout(() => {
      closeOverlay();
    }, duration + 500);
  };
  return { setSnackbar };
};
