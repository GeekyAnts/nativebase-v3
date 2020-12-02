import * as React from 'react';
import {
  OverlayContext,
  IOverlayContextProps,
  IuseOverlayProps,
} from './index';

export const useOverlay: IuseOverlayProps = () => {
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
  const setOverlay = (component: React.ReactNode, config?: configtype) => {
    config && setConfig({ ...defaultConfig, ...config });
    setOverlayItem(component);
  };
  return { closeOverlay, setOverlay };
};
