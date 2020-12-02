import type { IBoxProps } from '../../primitives';

export type IFadeProps = IBoxProps & {
  in?: boolean;
  duration?: number;
};
export type IScaleFadeProps = IBoxProps & {
  in?: boolean;
  duration?: number;
  initialScale?: number;
};
export type ISlideProps = IBoxProps & {
  in?: boolean;
  duration?: number;
  delay?: number;
  placement?: 'top' | 'bottom';
};
export type ISlideFadeProps = IBoxProps & {
  in?: boolean;
  duration?: number;
  offsetX?: number;
  offsetY?: number;
};
