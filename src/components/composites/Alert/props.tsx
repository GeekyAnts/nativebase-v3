import type { IBoxProps } from '../../primitives';

export type IAlertProps = IBoxProps & {
  style?: any;
  status?: string | undefined;
  children?: JSX.Element | JSX.Element[] | any;
  variant?: string | undefined;
  fontSize?: number | undefined;
};
export type IAlertContext = {
  status?: string | undefined;
  variant?: string | undefined;
  iconColor?: string;
  textColor?: string;
};
