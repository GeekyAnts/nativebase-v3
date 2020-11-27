import type { IBoxProps } from '../../primitives';

export type IOverlayProps = IBoxProps & {};
export type IOverlayCardProps = IBoxProps & {
  title?: string;
  isClosable?: boolean;
  onClose?: () => void;
  description?: string;
  status?: 'default' | 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  position?:
    | 'top'
    | ' top-left'
    | ' top-right'
    | ' bottom'
    | ' bottom-left'
    | ' bottom-right'
    | string;
  icon?: JSX.Element;
  render?: () => JSX.Element;
};
export type IuseOverlay = {
  title?: string;
  isClosable?: boolean;
  onClose?: () => void;
  description?: string;
  status?: 'default' | 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  icon?: JSX.Element;
  position?:
    | 'top'
    | ' top-left'
    | ' top-right'
    | ' bottom'
    | ' bottom-left'
    | ' bottom-right'
    | string;
  render?: () => JSX.Element;
};
export type IOverlayListProps = IOverlayCardProps & {
  placement?: string;
  overlayList?: [];
};
