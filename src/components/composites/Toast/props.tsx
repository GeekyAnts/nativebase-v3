import type { IBoxProps } from 'native-base';

export type IToastProps = IBoxProps & {};
export type IToastCardProps = IBoxProps & {
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
export type IuseToast = {
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
export type IToastListProps = IToastCardProps & {
  placement?: string;
  toastList?: [];
};
