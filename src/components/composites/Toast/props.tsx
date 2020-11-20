import type { IBoxProps } from '../../primitives';

export type IToastProps = IBoxProps & {
  title?: string;
  duration?: number | 'short' | 'long';
  position?: 'top' | 'bottom' | 'center';
  offset?: { x: number; y: number };
};
