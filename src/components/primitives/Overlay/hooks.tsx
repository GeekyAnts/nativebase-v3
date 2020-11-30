import * as React from 'react';
import { OverlayContext, IOverlayContextProps } from './index';

export const useOverlay = () => {
  const {
    setOverlayItem,
    defaultConfig,
    setConfig,
  }: IOverlayContextProps = React.useContext(OverlayContext);
  const closeOverlay = () => {
    setOverlayItem(null);
  };
  type configtype = {
    disableOverlay?: boolean;
    position?: string;
    backgroundColor?: string;
  };
  const setOverlayComponent = (
    component: React.ReactNode,
    config?: configtype
  ) => {
    config && setConfig({ ...defaultConfig, ...config });
    setOverlayItem(component);
  };
  return { closeOverlay, setOverlayComponent };
};
