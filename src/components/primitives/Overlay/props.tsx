import type { ViewProps } from 'react-native';

export type IOverlayProps = ViewProps & {
  children?: React.ReactNode;
  disableOverlay?: boolean;
  position?: string;
  defaultBackgroundColor?: string;
};

export type IOverlayContextProps = {
  setOverlayItem?: any;
  defaultConfig?: any;
  setConfig?: any;
};

type configtype = {
  disableOverlay?: boolean;
  position?: string;
  backgroundColor?: string;
};
type IuseOverlayPropsReturn = {
  closeOverlay: () => void;
  setOverlay: (component: React.ReactNode, config?: configtype) => void;
};
export type IuseOverlayProps = () => IuseOverlayPropsReturn;
