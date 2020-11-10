import type { IBoxProps } from '@native-base/v3';

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
  placement?: string;
};
export type ISlideFadeProps = IBoxProps & {
  in?: boolean;
  duration?: number;
  offsetX?: number;
  offsetY?: number;
};
